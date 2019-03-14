import axios from 'axios';


export function getService(url, callBackFunction, config){

    axios.get(url)
         .then(response =>{
            
            if(callBackFunction) {
                
                callBackFunction(response.data);
            }else {
                
               return response.data;
            }
         })
         .catch(error =>{

            config.history.push("/error");
         });

};

export function postService(url,object,callBackFunction,config) {

    axios.post(url,object)
         .then(response =>{

            if(callBackFunction) {
                callBackFunction(response.data);
            }else{
               return response.data;
            }
         })
         .catch(error => {

            config.history.push("/error");
         });
};


export function putService(url,object,callBackFunction,config) {

    axios.post(url,object)
         .then(response =>{

            if(callBackFunction) {
                callBackFunction(response.data);
            }else{
               return response.data;
            }
         })
         .catch(error => {

            config.history.push("/error");
         });
};


export function deleteService(url,object,callBackFunction,config) {

    axios.post(url,object)
         .then(response =>{

            if(callBackFunction) {
                callBackFunction(response.data);
            }else{
               return response.data;
            }
         })
         .catch(error => {

            config.history.push("/error");
         });
};