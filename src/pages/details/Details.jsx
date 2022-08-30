import { Star } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { SyncLoader } from "react-spinners";

import "./details.scss";

//Product Details
const Details = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProductDetails = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      console.log(product);
      setLoading(false);
    };
    getProductDetails();
  }, []);

  const Loading = () => {
    return (
      <>
        <div>{loading && <SyncLoader size={25} />}</div>
      </>
    );
  };

  const SelectedProduct = () => {
    return (
      <>
        <div className="details_left">
          <img src={product.image} alt="" />
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
          <button>Add to Cart</button>
          <NavLink to="/">Go to Cart</NavLink>
        </div>
      </>
    );
  };

  return (
    <div className="details">{loading ? <Loading /> : <SelectedProduct />}</div>
  );
};

export default Details;
