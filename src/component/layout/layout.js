import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Auxillary from '../../hoc/auxillary';
import NavBar from '../nav-bar/nav-bar'


class Layout extends Component {

    renderRedirect = () => {
        if (!this.props.isAuthenticated) {
          return <Redirect to='/login'/>
        }
    }
   
    render() {

        return(
          <Auxillary>
             {this.props.isAuthenticated ?             
              <Auxillary>
                  <NavBar/>
              </Auxillary>
               :
               this.renderRedirect()
            }            
          </Auxillary>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated : state.isAuthenticated
    }    
}



export default connect(mapStateToProps)(Layout);