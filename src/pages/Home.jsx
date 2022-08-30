import Slider from "../components/swiper/Slider";
import Products from "../components/products/Products";
import Footer from "../components/footer/Footer";

//Home Page
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Products/>
      <Footer />
    </div>
  );
};

export default Home;
