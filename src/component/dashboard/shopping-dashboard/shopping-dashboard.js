import React,{useEffect} from 'react';
import {connect} from 'react-redux';

import Auxillary from '../../../hoc/auxillary';
import classes from '../shopping-dashboard/shopping-dashboard.css';
import Button from '../../button/button';
import Input from '../../input/input';

const shoppingDashboard = (props) => {

    let productContent = null;
    productContent = props.productList.map((product,index) =>{
        return <Auxillary key={index}>
                    <div className="col-md-3">
                        <div className="card">
                                <Input type="IMAGE" imageUrl={product.imageUrl} class={'card-img-top'+" "+classes.imageCSS} alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <h4 className="center"> $ {product.price}</h4>                 
                                </div> 
                                <div className="card-footer">
                                    <Button eventType="CLICK" change={() =>props.addProductToCart(product)} classes="btn btn-primary btn-block" label="Add to Cart"/> 
                                </div> 
                        </div>
                    </div>
               </Auxillary>

    });
    useEffect(() =>{  
                  
    });

    return (

        <Auxillary> 
            <div className={classes.container}>
                <div className="row"> 
                    {productContent}              
                </div>
            </div>            
        </Auxillary>
    );
}


const mapFunctionToReducer = dispatch =>{

    return {

        addProductToCart: (product) => dispatch({type: "ADD_PRODUCT",productObj:product})
    }
}

export default connect(null,mapFunctionToReducer)(shoppingDashboard);