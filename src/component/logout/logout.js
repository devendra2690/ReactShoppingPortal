import React,{Component} from 'react';
import Auxillary from "../../hoc/auxillary";
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class Logout extends Component {

    componentDidMount() {

        this.props.clearStateObject();
    }

    render() {

        return(
            <Auxillary>
               <Redirect to="/"/>
            </Auxillary>
        );
    }    
}

const mapMethodToDispatch = dispatch => {

    return {
        clearStateObject : () => dispatch({type:"CLEAR_STATE"})
    };
};

export default connect(null,mapMethodToDispatch)(Logout);