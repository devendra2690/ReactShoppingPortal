import React,{Component} from 'react';
import {connect} from 'react-redux';

import classes from '../login/login.css';
import loginImage from '../../assets/img/login.png';
import Input from '../input/input'
import Button from '../button/button';
import {Redirect} from 'react-router-dom'; 
import Auxillary from '../../hoc/auxillary';
import validation from '../../util/validation';
import CustomError from '../error/custom-validation';
import {postService} from '../../service/service-operations';
//import LOGIN_SUCCESS from '../../util/actionType/LOGIN_SUCCESS';


class LoginForm extends Component {  

    state = {
        emailid: {
            value : '',
            validation :{
                required : true,
                maxLength : 40,
                minLength : 5,
                touched : false,
                isValid : false,
                errors : []
            }            
        },
        password: {
            value : '',
            validation :{
                required : true,
                maxLength : 20,
                minLength : 5,
                touched : false,
                isValid : false,
                errors : []
            }
        },
        isValid : false
    };
    
    authenticateUser = (event) =>{
        event.preventDefault();

        const requestObj = {emailid : this.state.emailid.value , password : this.state.password.value}

        postService("http://localhost:8080/authentication/validateUser", requestObj, 
                     this.props.dispatchLoginSuccess, this.props);
                     
        this.props.history.push("/dashboard/products?product=All");       
    }

    validation = (event) => {

       let errorList = validation(this.state[event.target.name].validation,event);
       
       if(errorList.length > 0) {
            
            this.setState({
                ...this.state,
                [event.target.name] :{
                    ...this.state[event.target.name],
                    validation :{
                        ...this.state[event.target.name].validation,
                        errors : errorList,
                        isValid : false
                    }
                },
                isValid : false
            }); 
       }else{
            
           let isValid = this.state.emailid.validation.isValid === this.state.password.validation.isValid;
           this.setState({
                ...this.state,
                [event.target.name] :{
                    ...this.state[event.target.name],
                    validation :{
                        ...this.state[event.target.name].validation,
                        errors : errorList,
                        isValid : true
                    }
                },
                isValid : isValid
           }); 
       }            
    };

    handleChange = (event) =>{
        this.setState({
            ...this.state,
            [event.target.name] : {
                ...this.state[event.target.name],
                value : event.target.value,
                touched : true
            }
        }); 
    }

    render() {

     let userValidated = null;   
     if(this.props.isUserValidated) {
        userValidated = <Redirect to="/"/>
     }   

      return (
        <Auxillary>           
            {this.props.isUserValidated ? userValidated :
            <form onSubmit = {this.authenticateUser} className={classes.form}>
                    <div className={classes.imgcontainer}>
                        <img src={loginImage} alt="Avatar" className={classes.avatar}/>
                    </div>
                    <div className={classes.container}>

                        <Input type="INPUT" placeholder="Enter Email ID" innerType="text"
                            value={this.state.emailid.value} label="emailid" 
                            change={this.handleChange} blur={this.validation} fieldName="Email ID"/>
                        <CustomError customErrors={this.state.emailid.validation.errors}/>

                        <Input type="INPUT" placeholder="Enter Password"  innerType="password"
                            value={this.state.password.value} label="password" 
                            change={this.handleChange} blur={this.validation} fieldName="Password"/>
                        <CustomError customErrors={this.state.password.validation.errors}/>
   
                        <Button eventType="SUBMIT" label="Login" />
                        <Input type="CHECKBOX" name="remmeberMe" 
                            label="Remember Me" checked="checked" 
                            change={() => {}}/>
                    </div>
                    <div className={classes.container}>
                        <Button classes={classes.cancelbtn} eventType="noEvent" label="Cancel" />
                        <span className={classes.psw}>Forgot <a href="#">password?</a></span>
                    </div>
            </form>
           } 
         </Auxillary>
       );
    }
}


const mapPropstoRedux = dispath =>{

    return {
        dispatchLoginSuccess : (data) => dispath({type:"LOGIN_SUCCESS",data:data}) 
    };
}

const mapStateToProps = state => {

    return {

        isUserValidated : state.isAuthenticated
    };
}

export default connect(mapStateToProps,mapPropstoRedux)(LoginForm);