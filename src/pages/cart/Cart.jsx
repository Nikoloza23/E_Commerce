import { useDispatch, useSelector } from "react-redux";
import { delCart } from "../../redux/action/index";
import { useState } from "react";

import "react-toastify/dist/ReactToastify.css";

import Modal from "react-modal";

import "./cart.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
//Cart process
const Cart = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const product = (product) => {
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

            <button onClick={openModal}>Check Order</button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h1 className="pay_procces">Paid Successfully!</h1>
            </Modal>
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
