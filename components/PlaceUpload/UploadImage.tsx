import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { CiCirclePlus } from "react-icons/ci";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface IimageForm {
  images?: FileList;
}

const UploadImage = ({
  placeImages,
  setPlaceImages,
}: {
  placeImages: any[];
  setPlaceImages: Dispatch<SetStateAction<any[]>>;
}) => {
  const imageForm = useForm<IimageForm>();
  const imageInput = imageForm.watch("images");

  useEffect(() => {
    if (imageInput && imageInput.length > 0) {
      Object.values(imageInput).forEach((file) => {
        const fileImage = URL.createObjectURL(file);
        console.log(fileImage);
        setPlaceImages((images) => {
          return [...images, fileImage];
        });
      });
    }
  }, [imageInput, setPlaceImages]);
  return (
    <form>
      <span className="font-semibold">사진</span>
      <div className="flex items-center justify-center">
        {placeImages.length !== 0 ? (
          <Swiper
            className="w-60 h-60 border my-2 select-none"
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}>
            {placeImages.map((fileURL, index) => (
              <SwiperSlide key={index}>
                <img
                  src={fileURL}
                  className="object-cover w-[100%] h-[100%]"></img>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="font-semibold mt-2 mb-3 w-60 h-60 border rounded-lg flex justify-center items-center">
            이미지 없음
          </div>
        )}
        <label id="images" className="w-20 flex justify-center items-center">
          <CiCirclePlus
            size={40}
            className="hover:text-green-600 transition-colors hover:cursor-pointer duration-300"></CiCirclePlus>
          <input
            id="images"
            {...imageForm.register("images")}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
          />
        </label>
      </div>
    </form>
  );
};

export default UploadImage;
