import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';


import Layout from './component/layout/layout';
import LoginComponent from '../src/component/login/login';
import ErrorComponent from './component/error/error';
import LogoutComponent from './component/logout/logout';
import Auxillary from './hoc/auxillary';
import ManageProduct from './component/admin/manage-product/manage-product';
import ManageOrder from './component/admin/manage-order/manage-order';
import Product from './component/admin/product-managment/product';
import Dashboard from './component/dashboard/dashboard';


class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Auxillary>
          <Layout/>
         
          <Route path="/login" exact component={LoginComponent}/>
          <Route path="/error" exact component={ErrorComponent}/>
          <Route path="/logout" exact component={LogoutComponent}/>
          <Route path="/manage-product" exact component={ManageProduct}/>
          <Route path="/manage-order" exact component={ManageOrder}/> 
          <Route path="/dashboard/products" exact component={Dashboard}/>          
          <Switch>
              <Route path="/product-details/:id" exact component={Product}/> 
              <Route path="/product-details" exact component={Product}/> 
          </Switch>

        </Auxillary>         
      </BrowserRouter>
    );
  }
}
export default App;
