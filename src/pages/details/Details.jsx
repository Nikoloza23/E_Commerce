import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action/index";

import { Star } from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify";

import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";

import Modal from "react-modal";

import "react-toastify/dist/ReactToastify.css";
import "./details.scss";

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
//Product Details
function Details(type) {
  const { id } = useParams();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const order = () => {
    if (order === 1) {
      toast.success("Successfully Paid", { position: toast.POSITION.TOP_CENTER });
    }
  }

  const addProduct = (product) => {
    dispatch(addCart({ basic: product, qty: quantity }));
    console.log(product, quantity);
  };

  const handleDecrement = () => {
    if (quantity !== 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    const getProductDetails = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProductDetails();
  }, [id]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const Loading = () => {
    return (
      <>
        <div>{loading && <Loader />}</div>
      </>
    );
  };

  const SelectedProduct = () => {
    return (
      <>
        <div className="details_Wrapper">
          <div className="details_left">
            <img onClick={openModal} src={product.image} alt="" />
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <button className="modal_close" onClick={closeModal}>
                close
              </button>
              <img src={product.image} alt="" className="modal_image" />
            </Modal>
          </div>
          <div className="details_right">
            <h4>{product.category}</h4>
            <h1>{product.title}</h1>
            <p>
              Rating {product.rating && product.rating.rate}
              <Star className="star" />
            </p>
            <h3>Total Price: {(product.price * quantity).toFixed(2)}$</h3>
            <h2 style={{ color: "gray" }}>Total Product: {quantity}</h2>
            <div className="quantity">
              <button
                className="increment"
                onClick={() => handleIncrement(product.id)}
              >
                +
              </button>
              <button
                onClick={() => handleDecrement(product.id)}
                className="decrement"
              >
                -
              </button>
            </div>
            <p className="descriprion">
              {product.description?.substring(0, 100)}
            </p>
            <div className="sides">
              <button
                onClick={() => addProduct(product, quantity)}
                className="add_cart"
              >
                Add to Cart
              </button>

              <button className="buy_now" onClick={order}>
                Buy Now
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
        <Footer type="list" />
      </>
    );
  };

  return (
    <div className="details">{loading ? <Loading /> : <SelectedProduct />}</div>
  );
}

export default Details;
