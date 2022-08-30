import Navbar from "../components/navbar/Navbar";
import Slider from "../components/swiper/Slider";
import ProductsList from "../components/products/ProductsList";
import Footer from "../components/footer/Footer";

//Home Page
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Slider />
      <ProductsList />
      <Footer />
    </div>
  );
};

export default Home;
