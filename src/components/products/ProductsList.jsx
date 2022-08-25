import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";

import "./productlist.scss";
import axios from "axios";

//Limited Product
const ProductsList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://fakestoreapi.com/products?limit=9`,
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [setLoading]);

  return (
    <div className="products_list_container">
      <div className="typical">For</div>
      <div className="products_container">
        <div className="loader">{loading && <SyncLoader size={25} />}</div>
        {data.map((product) => (
          <div key={product.id} className="card">
            <div>
              <img src={product.image} alt="" />
            </div>
            <div className="card-description">
              <h6>{product.title}</h6>
              <h6>{`Price: ${product.price}`}</h6>
              <h6>{`Description: ${product.description}`}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
