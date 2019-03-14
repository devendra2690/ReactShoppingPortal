import React,{Component} from 'react';
import axios from 'axios';

import Auxillary from '../../hoc/auxillary';
import SideBar from './sidebar/sidebar';
import ShoppingDashboard from './shopping-dashboard/shopping-dashboard';

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

   callServiceToGetProducts(search) {

        axios.get("http://localhost:8080/products/fetchProducts"+search)
        .then(response =>{
            products = response.data.map(product =>{
                return product;
            });
            this.setState({productList:products});
            productType = search;
        }) 
        .catch(error =>{                 
            this.props.history.push("/error");
        }); 
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