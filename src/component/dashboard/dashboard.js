import React,{Component} from 'react';

import Auxillary from '../../hoc/auxillary';
import SideBar from './sidebar/sidebar';
import ShoppingDashboard from './shopping-dashboard/shopping-dashboard';
import {getService} from '../../service/service-operations';

let productType = null;
let products = [];

class dashboard extends Component  {

   state = {
        productList : []
   }

   componentDidMount() {
        
        const search = this.props.location.search;
        this.callServiceToGetProducts(search);
   };

   componentDidUpdate() {

        const search = this.props.location.search;
        if(productType !== search) {
            this.callServiceToGetProducts(search);
        }         
   }

   handleServiceResponse = (response) => {

        products = response.map(product =>{
            return product;
        });
        this.setState({productList:products});
        productType = this.props.location.search;
   }

   callServiceToGetProducts(search) {           
        getService("http://localhost:8080/products/fetchProducts"+search,
                     this.handleServiceResponse,this.props);
   }

   render() { 

        return(
            <Auxillary>
               <div className="row">   
                    <SideBar/>
                    <ShoppingDashboard productList={this.state.productList}/>
                </div>
            </Auxillary>
        );
   } 
}

export default dashboard;