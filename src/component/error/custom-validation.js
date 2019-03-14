import React from 'react';

import Auxillary from '../../hoc/auxillary';

const customErrors = (props) => {

    
    //console.log("customErrors functional component"); 

    let errorMessageContent = null;

    errorMessageContent = props.customErrors.map((error,index) =>{
                                return <li key={index} className="alert alert-danger">{error}</li>;
                          });

    return(
       <Auxillary>
         <ul>
             {errorMessageContent}
         </ul>
       </Auxillary>
    );

};

export default customErrors;