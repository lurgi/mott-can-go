import { PlaceType } from "@/lib/types/naver-types";

const PlaceDetailHeader = ({ place }: { place: PlaceType }) => {
  return (
    <div className="font-semibold text-start w-3/4 whitespace-nowrap overflow-hidden overflow-ellipsis">
      {place.name}
    </div>
  );
};

export default PlaceDetailHeader;
