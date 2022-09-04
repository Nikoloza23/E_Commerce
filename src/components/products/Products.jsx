import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Loader from "../loader/Loader";

import "./products.scss";

//Products With Filter
const ProductsList = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let componentMounted = true;
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const filterProduct = (sneakers) => {
    const updatedList = data.filter((x) => x.category === sneakers);
    setFilter(updatedList);
  };

  const Loading = () => {
    return (
      <>
        <div>{loading && <Loader />}</div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="filters">
          <button className="filter" onClick={() => setFilter(data)}>
            All
          </button>
          <button
            className="filter"
            onClick={() => filterProduct("men's clothing")}
          >
            Men
          </button>
          <button
            className="filter"
            onClick={() => filterProduct("women's clothing")}
          >
            Women
          </button>
          <button className="filter" onClick={() => filterProduct("jewelery")}>
            Jewelery
          </button>
          <button
            className="filter"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        {filter.map((product) => {
          return (
            <div className="products_list_container" key={product.id}>
              <div key={product.id} className="card">
                <div>
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="card-description">
                  <h6>{product.title.substring(0, 20)}</h6>
                  <h6 className="price">{`Price: ${product.price}$`}</h6>
                  <NavLink to={`/products/${product.id}`}>
                    <div className="buy">Buy Now</div>
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className="set_products">
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default ProductsList;
