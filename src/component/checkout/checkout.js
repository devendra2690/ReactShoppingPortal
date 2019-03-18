import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Auxillary from '../../hoc/auxillary';
import classes from '../checkout/checkout.css';
import Input from '../input/input';
import Button from '../button/button';


const checkout = (props) => {


    let productList = props.productList;
    let productInCart = productList.length;
    let totalPrice = 0;
    let productContent = null;

    productContent = productList.map(product =>{

                        totalPrice = totalPrice + product.price;
                        return <p key={product.id}><Link to={{
                                    pathname:'/product-details/'+product.id,
                                    hash:'edit-product'}}>{product.name}</Link> 
                                    <span className={classes.price}>$ {product.price}</span>
                               </p>;
                       
                     });


    return (
        <Auxillary>

        <div className={classes.row}>
            <div className={classes['col-75']}>
                <div className={classes.container}>                
                        <div className={classes.row}>
                                <div className={classes['col-50']}>
                                    <h3>Billing Address</h3>
                                    <label htmlFor="fname"><i className={classes.fa+" "+classes['fa-user']}></i> Full Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
                                    <label htmlFor="email"><i className={classes.fa+" "+classes['fa-envelope']}></i> Email</label>
                                    <input type="text" id="email" name="email" placeholder="john@example.com"/>
                                    <label htmlFor="adr"><i className={classes.fa+" "+classes['fa-address-card-o']}></i> Address</label>
                                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
                                    <label htmlFor="city"><i className={classes.fa+" "+classes['fa-institution']}></i> City</label>
                                    <input type="text" id="city" name="city" placeholder="New York"/>

                                    <div className={classes.row}>
                                    <div className={classes['col-50']}>
                                        <label htmlFor="state">State</label>
                                        <input type="text" id="state" name="state" placeholder="NY"/>
                                    </div>
                                    <div className={classes['col-50']}>
                                        <label htmlFor="zip">Zip</label>
                                        <input type="text" id="zip" name="zip" placeholder="10001"/>
                                    </div>
                                    </div>
                                </div>

                                <div className={classes['col-50']}>
                                    <h3>Payment</h3>
                                    <label htmlFor="fname">Accepted Cards</label>
                                    <div className={classes['icon-container']}>
                                        <i className={classes.fa+" "+classes['fa-cc-visa']} style={{color:'navy'}}></i>
                                        <i className={classes.fa+" "+classes['fa-cc-amex}']} style={{color:'blue'}}></i>
                                        <i className={classes.fa+" "+classes['fa-cc-mastercard']} style={{color:'red'}}></i>
                                        <i className={classes.fa+" "+classes['fa-cc-discover']} style={{color:'orange'}}></i>
                                    </div>
                                    <label htmlFor="cname">Name on Card</label>
                                    <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
                                    <label htmlFor="ccnum">Credit card number</label>
                                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                                    <label htmlFor="expmonth">Exp Month</label>
                                    <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
                                    <div className={classes.row}>
                                    <div className={classes['col-50']}>
                                        <label htmlFor="expyear">Exp Year</label>
                                        <input type="text" id="expyear" name="expyear" placeholder="2018"/>
                                    </div>
                                    <div className={classes['col-50']}>
                                        <label htmlFor="cvv">CVV</label>
                                        <input type="text" id="cvv" name="cvv" placeholder="352"/>
                                    </div>
                                    </div>
                                </div>
                                
                                </div>
                                <label>
                                <input type="checkbox" onChange={() =>{}} checked="checked" name="sameadr"/> Shipping address same as billing
                                </label>
                                <Link to="/order-succsess"><input type="button" value="Continue to checkout" className="btn"/></Link>
                            </div>
                        </div>
                        <div className={classes['col-25']}>
                            <div className={classes.container}>
                            <h4>Cart <span className={classes.price} style={{color:'black'}}>
                            <i className={classes.fa+" "+classes['fa-shopping-cart']}></i> <b>{productInCart}</b></span></h4>
                            {productContent} 
                            <hr/>
                            <p>Total <span className="price" style={{color:'black'}}><b>${totalPrice}</b></span></p>
                            </div>
                        </div>
        </div>
        </Auxillary>
    );
}


const mapStateToProps = state => {

    return {        
        productList : state.productList
    }
};

export default connect(mapStateToProps,null)(checkout);