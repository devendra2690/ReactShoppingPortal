import React from 'react';

import Auxillary from '../../../hoc/auxillary';
import classes from './css/product-form.css';
import Input from '../../input/input';
import Button from '../../button/button';

const addProduct = (props) =>{

    let message = props.message.map((messageObj, index) =>{

       return <li key={index}> {messageObj}</li>;
    });

    return (
           
        <Auxillary>
        <div className={classes.messageContainer}>
           <ul>
              {message}
           </ul>
        </div>          
        <form onSubmit = {props.saveProduct} className={classes.form}>
           <div className={classes.container}>

               <Input type="INPUT" class={classes.inputType} innerType="input" disabled="disabled"
                       value={props.id} label="id" 
                       change={props.handleChange} fieldName="Product ID"/>

               <Input type="INPUT" class={classes.inputType} innerType="input" 
                      placeholder="Enter Product Name" 
                      value={props.title} label="title" 
                      change={props.handleChange} fieldName="Title"/>
               
               <Input type="INPUT" innerType="input" placeholder="Enter Category" 
                       value={props.price} label="price" class={classes.inputType}
                       change={props.handleChange} fieldName="Price"/>

               <Input type="SELECT" list={props.categoryList}
                       value={props.category} label="category" class={classes.inputType}
                       change={props.handleChange} fieldName="Product Category"
                       placeholder="Select Category"/>         

               <Input type="INPUT" innerType="input" placeholder="Enter Product URL" 
                       value={props.imageUrl} label="imageUrl" class={classes.inputType}
                       change={props.handleChange} fieldName="Product Url"/>        

               <Input type="IMAGE" imageUrl={props.imageUrl} class={classes.imageWidth}/>     

               <Button eventType="SUBMIT" label="Submit"/>                    
           </div>
           <div className={classes.container}>
                   <Button classes={classes.cancelbtn} eventType='CLICK' change={props.goBack} label='Go Back'/>
           </div>
        </form>        
   </Auxillary>
    );
} 

export default addProduct;