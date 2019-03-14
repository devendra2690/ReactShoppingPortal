//import LOGIN_SUCCESS from '../../util/actionType/LOGIN_SUCCESS';
import { tassign } from 'tassign';

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
        
        return tassign(state,{loginInfo:clearLoginInfo,isAuthenticated:null});

        case "ADD_PRODUCT":

        let productArray = state.productList;
        //productArray =  state.productList;
        productArray.push(action.productObj); 

        localStorage.setItem("productList",JSON.stringify(productArray));
        console.log(JSON.parse(localStorage.getItem("productList")));


        return tassign(state,{productList:productArray});

        default: return state;
    }
};

export default reducer;