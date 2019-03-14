import React from 'react';
import Auxillary from '../../hoc/auxillary';

const error = (props) => {

    return(
        <Auxillary>
            <b> Error Occured while performing request</b>
        </Auxillary>
    );
}

export default error;