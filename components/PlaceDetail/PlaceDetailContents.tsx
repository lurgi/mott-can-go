import { PlaceType } from "@/lib/types/naver-types";
import Link from "next/link";
import PlaceImgSwiper from "./PlaceImgSwiper";

const PlaceDetailContents = ({ place }: { place: PlaceType }) => {
  return (
    <div className="flex sm:flex-col w-full">
      <div className="w-1/2 sm:w-full relative after:pb-[100%] after:block border rounded-md ">
        <div className="absolute w-full aspect-square">
          <PlaceImgSwiper placeImgs={place.images} />
        </div>
      </div>
      <div className="w-1/2 pl-2 sm:w-full sm:pl-0 sm:my-2">
        <div className="side-bar_info_des">{place.description}</div>
        <Link
          href={`https://m.place.naver.com/restaurant/${place.naverId}/home`}
          target="_blank"
        >
          <p className="info_link">자세히 보기 &rarr;</p>
        </Link>
      </div>
    </div>
  );
};

export default PlaceDetailContents;
