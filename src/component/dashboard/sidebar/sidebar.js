import React from 'react';
import {NavLink} from 'react-router-dom';


import Auxillary from '../../../hoc/auxillary';
import classes from '../sidebar/sidebar.css';

const sidebar = (props) => {

    return (
        <Auxillary>
           <div className={'col-3'+" "+classes.sidebar}>
                <div className="sticky-top">
                    <div className="list-group">
                        <NavLink activeClassName={classes.active}  className="active" exact  to="/dashboard/products?product=All">All categories</NavLink>
                        <NavLink activeClassName={classes.active}  exact  to="/dashboard/products?product=vegetable">Vegetable</NavLink>
                        <NavLink activeClassName={classes.active}  exact  to="/dashboard/products?product=fruits">Fruits</NavLink>
                        <NavLink activeClassName={classes.active}  exact  to="/dashboard/products?product=seasoning">Seasoning</NavLink>
                        <NavLink activeClassName={classes.active}  exact  to="/dashboard/products?product=bread">Bread</NavLink>
                        <NavLink activeClassName={classes.active}  exact  to="/dashboard/products?product=dairy">Dairy</NavLink>
                    </div>
                </div>     
         </div>
        </Auxillary>
    );
}

export default sidebar;