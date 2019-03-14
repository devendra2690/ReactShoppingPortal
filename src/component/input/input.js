import React from 'react';

import Auxillary from '../../hoc/auxillary';

const input = (props) => {

    let inputType = props.type;
    let input = null;
    
    switch(inputType) {

        case "INPUT" :
        let inputInnerType = props.innerType;
        
         input =   <Auxillary>
                        <label htmlFor = {props.label}><b>{props.fieldName}</b></label>
                        <input type = {inputInnerType} className = {props.class || ''} 
                               placeholder = {props.placeholder || ''} 
                               value = {props.value || ''} name = {props.label || ''} 
                               disabled = {props.disabled || ''} required
                               onChange = {props.change || (() =>{})}
                               onBlur = {props.blur || (() =>{})}/>
                    </Auxillary>;
         break;
         
         case "TEXTAREA" :
         input =   <Auxillary>
                        <label htmlFor = {props.label}><b>{props.fieldName}</b></label>
                        <textarea placeholder={props.placeholder} 
                            value={props.value} name={props.label} 
                            required className={props.class || ''}
                            onChange={props.change || (() =>{})}/>
                    </Auxillary>;
         break; 
         
         case "CHECKBOX" :
          input =  <Auxillary>
                     <label>
                        <input type="checkbox" checked={props.checked} onChange={props.change || (() =>{})} 
                               name={props.name}/>
                        {props.label}
                      </label>
                   </Auxillary>;
         break;     
         
         case "SELECT" :
   
          let optionValue = props.list.map(object =>{
                                 
                                return <option key={object.key} value={object.key}>{object.value}</option>;
                            });
          input = <Auxillary>
                     <label htmlFor = {props.label}><b>{props.fieldName}</b></label>
                     <select className={props.class || ''} placeholder={props.placeholder || ''}
                             name={props.label || ''} value={props.value || ''}
                             onChange={props.change || (() =>{})} >
                        {optionValue}
                     </select>
                  </Auxillary> ;  
         break;

         case "IMAGE":

          input = <Auxillary> 
                     <img src={props.imageUrl} alt="" className={props.class}/>
                  </Auxillary>; 
         break;

         default :  
         input =  null;        
    }

    return (

        <Auxillary>
            {input}
        </Auxillary>
    );
}

export default input;