import { useDispatch, useSelector } from "react-redux";
import { delCart } from "../../redux/action/index";

import "./cart.scss";

//Cart
const Cart = () => {
  const state = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();

  const handleClose = (id) => {
    dispatch(delCart(id));
    console.log(id);
  };

  const product = (product) => {
    return (
      <div className="cart_container" key={product.id}>
        <button onClick={() => handleClose(product.id)}>X</button>
        <img src={product.image} alt="" />
        <h1>{product.title}</h1>
        <div className="product_price">
          Total Price : {product.price * product.qty}$
        </div>

        <div className="quantity">Product: {product.qty}</div>
        <hr />
      </div>
    );
  };

  const total = (product) => {
    const DUMMY_ARR = [
      {
        id: product.id,
        price: product.price * product.qty,
      },
    ];

    const tot = DUMMY_ARR.reduce((acc, inc) => inc.price + acc, 0);
    return (
      <div key={product.id}>
        {state.length !== 0 && (
          <div className="total">
            <div>Sub Total:{tot} </div>
            <div>Grand Total: </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className=" cart">
      {state.length !== 0 && state.map(product)}
      {state.length !== 0 && state.map(total)}

      {state.length === 0 && (
        <div className="empty_image">
          <img
            src="https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038--android.jpg"
            alt="/"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
