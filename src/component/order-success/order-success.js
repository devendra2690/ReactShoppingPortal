import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Auxillary from '../../hoc/auxillary';
import {CLEAR_CART} from '../../util/action-types';

const orderSuccess = (props) => {


    useEffect(() =>{

        props.clearCart();
    });

    return (
        <Auxillary>
              <b>Thanks You {props.name} for Placing order.</b><hr/>
              <span> Your order id is REQ234567.</span><hr/>
              <span> <Link to="/dashboard/products?product=All">Start new Order</Link></span>
        </Auxillary>
    );
}

const mapStateMethodToProps = dispatch => {

    return {

        clearCart : () => dispatch({type: CLEAR_CART})
    };
};


const mapStateToProps = state => {

    return {

        name : state.loginInfo.name
    }
};

export default connect(mapStateToProps,mapStateMethodToProps)(orderSuccess);