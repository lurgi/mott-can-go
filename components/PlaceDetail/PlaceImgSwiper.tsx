import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PlaceImgSwiper = ({ placeImgs }: { placeImgs: string[] }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="w-full h-full"
    >
      {placeImgs.map((image, index) => (
        <SwiperSlide key={index} className="w-full h-full object-cover">
          <img
            src={image}
            className="w-full h-full object-cover rounded-md notdraggable"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PlaceImgSwiper;
