import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Auxillary from '../../hoc/auxillary';
import classes from '../nav-bar/nav-bar.css';

const navBar = (props) =>{

    let userRole = props.userRole;
    let adminNavLink = null;

    if(userRole === 'ADMIN') {
        adminNavLink =  <Auxillary><li><Link to="/manage-order">Manage Orders</Link></li>
                        <li><Link to="/manage-product">Manage Products</Link></li></Auxillary>;
    }
   return(
       <Auxillary>
           <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">Shopping Portal</a>
                    </div>
                    <ul className="nav navbar-nav">
                    <li className="active"><Link to="/dashboard/products?product=All">Home</Link></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" 
                             aria-haspopup="true" aria-expanded="false">{props.name} <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><Link to="#">Your Orders</Link></li>
                            {adminNavLink}
                            <li><Link to="/logout">Logout</Link></li>
                        </ul>
                     </li>
                    </ul>
                    <div className={classes.imagePanel}>
                     <Link to="/order-summary"><b> Shopping Cart({props.producObjectSize})</b></Link>
                    </div>   
                </div>
            </nav>
       </Auxillary>
   );
}

const mapStateToProps = state => {

    return {
        name : state.loginInfo.name,
        userRole : state.loginInfo.userRole,
        producObjectSize : state.productList.length
    };
}

export default connect(mapStateToProps,null)(navBar);