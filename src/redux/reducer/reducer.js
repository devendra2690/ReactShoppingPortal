//import LOGIN_SUCCESS from '../../util/actionType/LOGIN_SUCCESS';
import { tassign } from 'tassign';
import { addProduct,updateProduct } from '../../util/reducer-method';
import {UPDATE_PRODUCT,CLEAR_CART} from '../../util/action-types';

const initialState = {

   loginInfo : {
       name : (JSON.parse(localStorage.getItem("userInfo"))) ? (JSON.parse(localStorage.getItem("userInfo"))).name : null,
       emailid : (JSON.parse(localStorage.getItem("userInfo"))) ? (JSON.parse(localStorage.getItem("userInfo"))).emailid : null,
       phoneNo : (JSON.parse(localStorage.getItem("userInfo"))) ? (JSON.parse(localStorage.getItem("userInfo"))).phoneNo : null,
       userRole : (JSON.parse(localStorage.getItem("userInfo"))) ? (JSON.parse(localStorage.getItem("userInfo"))).userRole : null
   },
   isAuthenticated : localStorage.getItem("isAuthenticated"),
   productList : (JSON.parse(localStorage.getItem("productList"))) ? (JSON.parse(localStorage.getItem("productList"))) : []
};


const reducer = (state = initialState,action) => {

    switch(action.type){

        case "LOGIN_SUCCESS":
            const loginInfo = {
                                emailid : action.data.emailid,
                                name : action.data.name,
                                phoneNo : action.data.phoneNo,
                                userRole : action.data.userRole
                            };
                localStorage.setItem("isAuthenticated",true);
                localStorage.setItem("userInfo",JSON.stringify(loginInfo));                   

        return tassign(state,{loginInfo:loginInfo,isAuthenticated:true});

        case "CLEAR_STATE":

            const clearLoginInfo = {
                                emailid : null,
                                name : null,
                                phoneNo : null,
                                userRole : null
                            };
            localStorage.clear();
        
        return tassign(state,{loginInfo:clearLoginInfo,isAuthenticated:null,productList:[]});

        case "ADD_PRODUCT":

            let productArray = addProduct(state,action.productObj)
            localStorage.setItem("productList",JSON.stringify(productArray));
        return tassign(state,{productList:productArray});

        case UPDATE_PRODUCT:

              let updatedProductList = updateProduct(action.product_id, action.count, state.productList);
              localStorage.setItem("productList",JSON.stringify(updatedProductList));

        return tassign(state,{productList:updatedProductList});

        case CLEAR_CART:
           
              localStorage.setItem("productList",null);  
         return tassign(state,{productList:[]});

        default: return state;
    }
};

export default reducer;