const validation = (validation,event) =>{

    let errorList = [];

    for(let validationType in validation) {

      switch(validationType) {

        case "required":
             
                if(!event.target.value) {
                  errorList.push(event.target.name.toUpperCase()+" should not be Null. It is required field.");  
                };
        break;

        case "maxLength":

                if(event.target.value.toString().length > validation[validationType]) {
                    errorList.push("Maximum length for "+event.target.name.toUpperCase()+" is "+validation[validationType]);  
                };
        break;

        case "minLength":

                if(event.target.value.toString().length < validation[validationType]) {
                    errorList.push("Minimum length for "+event.target.name.toUpperCase()+" is "+validation[validationType]);  
                };
        break;
       
        default:;           
      }
    }

    return errorList;

}

export default validation;