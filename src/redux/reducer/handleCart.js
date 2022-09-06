const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((x) => x.id === product.basic.id);
            if (exist) {
                return state.map((x) =>
                    x.id === product.basic.id ? { ...x, qty: x.qty + 1 } : x
                )
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product.basic,
                        qty: product.qty,
                    }
                ]
            }
        case "DELITEM":

            const id = action.payload
            const exist1 = state.find((x) => x.id === id)
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);

            } else {

                return state.map((x) =>
                    x.id === id ? { ...x, qty: x.qty - 1 } : x
                )
            }
        default:
            return state;
    }
}

export default handleCart