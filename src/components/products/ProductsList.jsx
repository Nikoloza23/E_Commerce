import Bounce from "react-reveal/Bounce";
import "./productlist.scss";

const ProductsList = () => {
  return (
    <div className="products_list_container">
      <div className="filter_container">
        <div className="wrapper">
          <Bounce left>
            <button>All</button>
          </Bounce>
        </div>
        <div className="wrapper">
          <Bounce left>
            <button>Men</button>
          </Bounce>
        </div>
        <div className="wrapper">
          <Bounce left>
            <button>Women</button>
          </Bounce>
        </div>
        <div className="wrapper">
          <Bounce left>
            <button>Jewelery</button>
          </Bounce>
        </div>
        <div className="wrapper">
          <Bounce left>
            <button>Electronic</button>
          </Bounce>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
