import React,{Component} from 'react';

import Auxillary from '../../../hoc/auxillary';
import EditProduct from './edit-product';
import AddProduct from './add-product';
import {putService,postService,getService} from '../../../service/service-operations';

let productOperationType = null;
let productID = null;
let categoryList = [];
let componentMessages = [];

class Product extends Component {

    state = {
        product : {

            id : null,
            title : null,
            category : null,
            imageUrl : null,
            price : null
        },
        message:[]
    }

    handleChange = (event) =>{
      
         let fieldName = event.target.name;
         let fieldValue = event.target.value;
         let updatedProductDetails = {...this.state.product,[event.target.name] : event.target.value,message:[]};
         this.setState({product:updatedProductDetails},() => {            
                    this.checkProductAndCategoryCombination(fieldName,fieldValue);
          })         
    };

    updateProduct = (event) =>{

        event.preventDefault();       
        putService("http://localhost:8080/products/updateProductDetails",this.state.product,
                   this.handleServiceResponsePostUpdate,this.props);     
    };


    handleServiceResponsePostUpdate = () => {
        componentMessages.splice(0,componentMessages.length);
        componentMessages.push("Product Information saved succesfully");
        this.setState({message:componentMessages});
    }

    setCategoriesTypeFromServerResponse = (response) => {
        categoryList = response.map( category =>{
            return {key:category.name,value:category.value};
         })
    };

    
    saveProduct = (event) =>{

        event.preventDefault();          
        postService("http://localhost:8080/products/save",this.state.product,
                        this.handleResponsePostSaveProduct,this.props)     
    }

    handleResponsePostSaveProduct = (response) => {

        componentMessages.splice(0,componentMessages.length);
        componentMessages.push("Product Information saved succesfully");
        let productObj = {...this.state.product};
        productObj.id = response.id;

        this.setState({message:componentMessages,product:productObj});
    }

    checkProductAndCategoryCombination = (fieldName,fieldValue) => {

        if(fieldName === 'title' || fieldName === 'category') {
            const product = {...this.state.product,[fieldName]:fieldValue}  
            postService("http://localhost:8080/products/validateProductName",product,
                        this.handleProductNameServiceValidation,this.props)
        }       
    };

    handleProductNameServiceValidation = (response) =>{

         // Here you can fire validation rule to check title and category type.
         console.log(response);
    }

    goBack = () => {

        this.props.history.push('/manage-product')
    }; 

    saveProductByIDFromServiceResponse = (response) =>{

        let productDetails = {...this.state.product};
        productDetails.id = response.id;  
        productDetails.title = response.title;  
        productDetails.imageUrl = response.imageUrl;  
        productDetails.category = response.category;  
        productDetails.price = response.price;  

        this.setState({product : productDetails});
    }

    render() {

        productOperationType = this.props.location.hash;
        productID = productOperationType === '#edit-product' ? this.props.match.params.id : null;
        let content = null;
        if(productOperationType === '#edit-product') {

            content = <EditProduct id={this.state.product.id}
                                   title = {this.state.product.title} 
                                   price = {this.state.product.price}
                                   category = {this.state.product.category}
                                   imageUrl = {this.state.product.imageUrl}
                                   handleChange = {this.handleChange}
                                   saveProduct = {this.updateProduct}
                                   categoryList = {categoryList}
                                   message = {this.state.message}
                                   goBack = {this.goBack}/>;
        }else if(productOperationType === '#add-product') {

            content = <AddProduct   id={this.state.product.id}
                                    title = {this.state.product.title} 
                                    price = {this.state.product.price}
                                    category = {this.state.product.category}
                                    imageUrl = {this.state.product.imageUrl}
                                    handleChange = {this.handleChange}
                                    saveProduct = {this.saveProduct}
                                    categoryList = {categoryList}
                                    message = {this.state.message}
                                    goBack = {this.goBack}
                                    checkProductNameValidation = {this.checkProductAndCategoryCombination}/>;
        }else{

            this.props.history.push('/manage-product');
        }

        return(
            <Auxillary>
                {content}                  
            </Auxillary> 
        );
    }

    componentDidMount() {

        getService("http://localhost:8080/products/categories",this.setCategoriesTypeFromServerResponse,this.props);    
        if(productID) {
            getService("http://localhost:8080/products/getProductByID/"+productID,
                        this.saveProductByIDFromServiceResponse,this.props); 
        }     
    }
    
}

export default Product;