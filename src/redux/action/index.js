//For Add Item in Cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

export const delCart = (id) => {
    return {
        type: "DELITEM",
        payload: id
    }
}

