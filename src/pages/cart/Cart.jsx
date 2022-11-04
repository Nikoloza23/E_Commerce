import { useDispatch, useSelector } from "react-redux";
import { delCart } from "../../redux/action/index";

import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "./cart.scss";

//Cart
const Cart = () => {
  const state = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();

  const handleClose = (id) => {
    dispatch(delCart(id));
  };

  var subTotal = 0;
  var grandTotal = 0;
  state.forEach((item) => {
    subTotal = subTotal + item.price * item.qty;
    grandTotal = grandTotal + item.qty;
  });

  const notify = () => {
    toast.success("Successfully paid", { position: toast.POSITION.TOP_CENTER });
  };

  const product = (product) => {
    const handleIncrement = (product) => {
      return <>{product.qty + 1}</>;
    };
    return (
      <div key={product.id}>
        <div className="cart_container">
          <button onClick={() => handleClose(product.id)} className="deleter">
            X
          </button>
          <img src={product.image} alt="" />
          <div className="cart_description_container">
            <h1>{product.title}</h1>
            <div className="product_price">
              Total Price : {product.price * product.qty}$
            </div>
            <div className="quantity">Product: {product.qty}</div>
            <div className="quanter">
              <button
                className="cart_increment"
                onClick={() => handleIncrement(product.qty)}
              >
                +
              </button>
              <button className="cart_decrement">-</button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  };

  return (
    <div className=" cart">
      {state.length !== 0 && state.map(product)}
      <div>
        {state.length !== 0 && (
          <div className="total">
            <div className="sub">Sub Total: {Math.floor(subTotal)}$</div>
            <div className="grand">Product: {grandTotal} </div>

            <button onClick={notify}>
              Check Order <ToastContainer />
            </button>
          </div>
        )}
      </div>

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
