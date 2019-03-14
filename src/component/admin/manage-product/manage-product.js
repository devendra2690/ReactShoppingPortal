import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import Button from '../../button/button';
import classes from '../manage-product/manage-product.css';
import Auxillary from '../../../hoc/auxillary';
import {getService} from '../../../service/service-operations';


class ManageProduct extends Component {

    state ={      
        productList : []
    }

    addProduct = () =>{

        this.props.history.push('/product-details#add-product');
    };

    render() {

        let productTable = null;

        productTable =  this.state.productList.map( product =>{

           return  <tr key={product.id}>
                        <td><Link to={{
                                       pathname:'/product-details/'+product.id,
                                       hash:'edit-product'}}>{product.id}</Link></td>
                        <td>{product.title}</td>
                        <td>{product.category}</td>
                        <td>$ {product.price}</td>
                    </tr>
        });

        return(
            <Auxillary>
              <div className={classes.buttonContainer}>
                  <Button eventType='CLICK' change={this.addProduct} label='New Product'/>
              </div>   
            {/*<MaterialTable
                columns={[
                    { title: 'ID', field: 'id'},
                    { title: 'Product Name', field: 'title' },
                    { title: 'Product Price', field: 'price', type: 'numeric' },
                    { title: 'Categoy Name', field: 'category'}
                ]}
                data={this.state.productList}
                title="Product Details"
            />*/}
            <table>
             <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Categoy</th>
                    <th>Product Price</th>
                </tr>  
             </thead>
            <tbody>                       
              {productTable}
            </tbody>
            </table>   
           </Auxillary>
        );
    }
    
    
    componentDidMount() {

        let allProductList = [];

        getService("http://localhost:8080/products/fetchAllProduct",this.setProductList);
        {/*axios.get("http://localhost:8080/products/fetchAllProduct")
        .then(response =>{
            allProductList = response.data.map(product =>{
                return product;
            })
            this.setState({productList:allProductList});
        }).catch(error =>{
             this.props.history.push("/error");
        });*/}
    }

    setProductList = (response) =>{

        let allProductList = [];

        allProductList = response.map(product =>{
            return product;
        })
        this.setState({productList:allProductList});
    };    
}

export default ManageProduct;