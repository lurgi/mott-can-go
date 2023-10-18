import { PlaceType } from "@/lib/types/naver-types";
import Link from "next/link";

const PlaceDetailContents = ({ place }: { place: PlaceType }) => {
  return (
    <div>
      <div className="w-full aspect-video border rounded-md bg-slate-500"></div>
      <div className="side-bar_info_des">{place.description}</div>
      <Link
        href={`https://m.place.naver.com/restaurant/${place.naverId}/home`}
        target="_blank"
      >
        <p className="info_link">자세히 보기 &rarr;</p>
      </Link>
    </div>
  );
};

export default PlaceDetailContents;
