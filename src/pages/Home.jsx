import Navbar from "../components/navbar/Navbar";
import Slider from "../components/swiper/Slider";
import ProductsList from "../components/products/ProductsList";

//Home Page
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Slider />
      <ProductsList />
    </div>
  );
};

export default Home;
