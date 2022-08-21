import image1 from "../../assets/img1.png";
import image2 from "../../assets/img2.webp";
import image3 from "../../assets/img3.jpg";
import image4 from "../../assets/img4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.scss";

const Slider = () => {
  return (
    <>
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
    </>
  );
};

export default Slider;
