import React,{Component} from 'react';
import axios from 'axios';

import Auxillary from '../../../hoc/auxillary';
import EditProduct from './edit-product';
import AddProduct from './add-product';

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
         
         let updatedProductDetails = {...this.state.product,[event.target.name] : event.target.value,message:[]};
         this.setState({product:updatedProductDetails})
    };

    updateProduct = (event) =>{

        event.preventDefault();
        axios.put("http://localhost:8080/products/updateProductDetails",this.state.product)
             .then(response => {

                componentMessages.splice(0,componentMessages.length);
                componentMessages.push("Product Information saved succesfully");
                this.setState({message:componentMessages});
             })
             .catch(error=>{
                 this.props.history.push("/error");
             });
    };
    
    saveProduct = (event) =>{

        event.preventDefault();
        axios.post("http://localhost:8080/products/save",this.state.product)
             .then(response => {

                componentMessages.splice(0,componentMessages.length);
                componentMessages.push("Product Information saved succesfully");
                let productObj = {...this.state.product};
                productObj.id = response.data.id;

                this.setState({message:componentMessages,product:productObj});
             })
             .catch(error=>{
                 this.props.history.push("/error");
             });
    }

    goBack = () => {

        this.props.history.push('/manage-product')
    }; 

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
                                    goBack = {this.goBack}/>;
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

        if(productID) {

            axios.get("http://localhost:8080/products/getProductByID/"+productID)
             .then(response =>{

               let productDetails = {...this.state.product};
               productDetails.id = response.data.id;  
               productDetails.title = response.data.title;  
               productDetails.imageUrl = response.data.imageUrl;  
               productDetails.category = response.data.category;  
               productDetails.price = response.data.price;  

               this.setState({product : productDetails});
             })
             .catch(error =>{

                this.props.history.push("/error");
             });
        }
        
        axios.get("http://localhost:8080/products/categories")
             .then(response => {
                 categoryList = response.data.map( category =>{
                    return {key:category.name,value:category.value};
                 })
             })
             .catch(error =>{
                this.props.history.push("/error");
             })
    }
    
}

export default Product;