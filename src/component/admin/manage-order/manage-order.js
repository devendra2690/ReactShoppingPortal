import React from 'react';
import {connect} from 'react-redux';

const manageOrder = (props) =>{

    if(props.userRole !== 'ADMIN') {
        props.history.push("/no-access");
    }

    return(
        <div>
            Manage Orders
        </div>
    );
}

const mapStateToProperties  = state => {

    return {
        userRole : state.loginInfo.userRole
    }
}

export default connect(mapStateToProperties,null)(manageOrder);