//For Add Item in Cart
export const addCart = (product) => {
    console.log(product);
    return {
        type: "ADDITEM",
        payload: product
    }
}

export const delCart = (product) =>{
    return{
        type:"DELITEM",
        payload: product
    }
}

