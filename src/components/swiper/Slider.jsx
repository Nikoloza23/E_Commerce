import image1 from "../../assets/Own-It_Launch-Primary.webp";
import image2 from "../../assets/Womens_Sneakers.webp";
import image3 from "../../assets/AMBUSH_x_Nike_Air_Adjust.webp";
import image4 from "../../assets/YVM-AH-Hero_Primary.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  EffectFade,
  EffectCoverflow,
  Pagination,
} from "swiper";

import { Autoplay } from "swiper";

// Import Swiper stylesD
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "./slider.scss";

SwiperCore.use([Navigation, EffectFade, EffectCoverflow, Pagination]);
const Slider = () => {
  return (
    <div className="slider_container">
      <Swiper
        modules={[
          Autoplay,
          Navigation,
          EffectFade,
          EffectCoverflow,
          Pagination,
        ]}
        spaceBetween={1}
        slidesPerView={1}
        speed={1000}
        grabCursor={true}
        navigation
        effect={"coverflow"}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop
      >
        <SwiperSlide>
          <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
