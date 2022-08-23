import Navbar from "../components/navbar/Navbar";
import Slider from "../components/swiper/Slider";
import Search from "../components/search/Search";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Slider />
      <Search />
    </div>
  );
};

export default Home;
