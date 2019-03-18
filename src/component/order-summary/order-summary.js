import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Auxiallary from '../../hoc/auxillary';
import Input from '../input/input';
import classes from './order-summary.css'
import Button from '../button/button';
import {UPDATE_PRODUCT} from '../../util/action-types';


const orderSummary = (props) => {

    let productTable = null;
    let totalPrice = 0;

        productTable =  props.productList.map( product =>{
           
            totalPrice = totalPrice + product.price;
            
            return  <tr key={product.id}>
                        <td><Link to={{
                                       pathname:'/product-details/'+product.id,
                                       hash:'edit-product'}}>{product.id}</Link></td>
                        <td>{product.name}</td>
                        <td><Input type="INPUT" innerType="input" value={product.count}
                               name='count' class={classes.inputWidth}
                               change = {(event) => {props.updateProductList(product,event)}}/></td>
                        <td>$ {product.price}</td>
                    </tr>
        });

    return (
       <Auxiallary>
            <table>
             <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Number of Quantity</th>
                    <th>Product Price</th>
                </tr>  
             </thead>
            <tbody>                       
              {productTable}
            </tbody>
            </table> 
            <div className={classes.divMargin}>
               <span> <b>Total: $ {totalPrice}</b></span> 
            </div>
            <div className={classes.divMargin}>
               <Link to="/checkout"><Button eventType="CLICK" label="Checkout" classes={classes.buttonWidth}/></Link>
            </div>    
        </Auxiallary>
    );
}

const mapStateToProps = state =>{

    return {

        productList : state.productList
    }
}

const mapPropsChangeToMethod = dispatch => {

    return {

        updateProductList : (product,event) => dispatch({type : UPDATE_PRODUCT,product_id : product.id, count : event.target.value})
    }
}

export default connect(mapStateToProps,mapPropsChangeToMethod)(orderSummary);