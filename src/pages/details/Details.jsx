import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

import { Star } from "@mui/icons-material";
import { SyncLoader } from "react-spinners";

import Modal from "react-modal";

import "./details.scss";
import Footer from "../../components/footer/Footer";

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
        <div>{loading && <SyncLoader size={25} />}</div>
      </>
    );
  };

  const SelectedProduct = () => {
    return (
      <div>
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
          <h3>{product.price}$</h3>
          <p className="descriprion">
            {product.description?.substring(0, 100)}
          </p>
          <div className="sides">
            <button>Add to Cart</button>
            <NavLink to="/">Go to Cart</NavLink>
          </div>
        </div>
        <Footer type="list" />;
      </div>
    );
  };

  return (
    <div className="details">{loading ? <Loading /> : <SelectedProduct />}</div>
  );
}

export default Details;
