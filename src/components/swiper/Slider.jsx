import image1 from "../../assets/img1.png";
import image2 from "../../assets/img2.webp";
import image3 from "../../assets/img3.jpg";
import image4 from "../../assets/img4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import ReactStars from "react-rating-stars-component";

// Import Swiper stylesD
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.scss";

const Slider = () => {
  return (
    <div className="slider_container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        speed={1000}
        grabCursor={true}
        autoplay={{ delay: 3000 }}
        loop
      >
        <SwiperSlide>
          <div className="title">
            <h1>StockX</h1>
            <img src={image1} alt="" />
            <div className="stars">
              <ReactStars size={40} color={"#f4c10f"} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title">
            <h1>StockX</h1>
            <img src={image2} alt="" />
            <div className="stars">
              <ReactStars size={40} color={"#f4c10f"} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title">
            <h1>StockX</h1>
            <img src={image3} alt="" />
            <div className="stars">
              <ReactStars size={40} color={"#f4c10f"} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title">
            <h1>StockX</h1>
            <img src={image4} alt="" />
            <div className="stars">
              <ReactStars size={40} color={"#f4c10f"} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
