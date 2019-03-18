export function addProduct(state, inputProduct){

    let productLists = state.productList;
    const product = {  
                        id : inputProduct.id,
                        price : inputProduct.price,
                        name : inputProduct.title,
                        orignalPrice : inputProduct.price
                    };

    if (productLists.length === 0) {
          
      let productObj = {...product,count:1};
      productLists.push(productObj);

      return productLists;
    }else {

        let isProductAvailable = false;
        let updatedProductLists = productLists.map(productObj =>{
                                  
            if(product.id === productObj.id) {               
                productObj.price = productObj.price + product.price;
                productObj.count = productObj.count + 1;
                isProductAvailable = true;
            }
            return productObj;
       });

       if(!isProductAvailable) {

         let productObj = {...product,count:1};
         updatedProductLists.push(productObj);
       }
       
       return updatedProductLists;       
    }
}


export function updateProduct(productId,count,productLists) {

  let updatedProductList =  productLists.map(product =>{
     
                                  if(product.id === productId) {

                                    debugger;
                                    product.count = +count;
                                    product.price = product.orignalPrice * product.count;
                                  } 

                                  return product;
                            });

   return updatedProductList;                         
}