import { PlaceType } from "@/lib/types/naver-types";
import Link from "next/link";
import PlaceImgSwiper from "./PlaceImgSwiper";

const PlaceDetailContents = ({ place }: { place: PlaceType }) => {
  return (
    <div className="flex sm:flex-col w-full">
      <div className="w-2/5 sm:w-full aspect-video border rounded-md bg-slate-500">
        <PlaceImgSwiper />
      </div>
      <div className="w-3/5 pl-2 sm:w-full sm:pl-0">
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
