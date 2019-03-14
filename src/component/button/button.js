import React from 'react';
import Auxillary from '../../hoc/auxillary';

const button = (props) => {

    let eventType = props.eventType;
    let eventScript = null;
    if(eventType) {
        
        switch(eventType) {

            case "CLICK":
              eventScript = <Auxillary>
                                <button type="button" onClick={props.change} className={props.classes} disabled={props.disabled || ''}>{props.label}</button>
                            </Auxillary>
            break;
            case "SUBMIT":
              eventScript = <Auxillary>
                                <button type="submit" className={props.classes} disabled={props.disabled || ''}>{props.label}</button>
                            </Auxillary>
            break;
            
            default: 
            eventScript =  <Auxillary> 
                                <button type="button" className={props.classes}>{props.label}</button> 
                            </Auxillary>             
        }

    }

    return(
        <Auxillary>
            {eventScript}
        </Auxillary>
    );
}

export default button;