import { useDispatch, useSelector } from "react-redux";
import { delCart } from "../../redux/action/index";

import "./cart.scss";

//Cart
const Cart = () => {
  const state = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delCart(item));
    console.log(item);
  };

  const product = (product) => {
    return (
      <div className="cart_container" key={product.id}>
        <button onClick={() => handleClose(product)}>X</button>
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

  return (
    <div className=" cart">
      {state.length !== 0 && state.map(product)}
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
