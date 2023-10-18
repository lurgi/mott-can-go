"use client";
import applyedPlacesStore from "@/lib/zustand/applyedPlaceStore";
import PlaceDetailUi from "./PlaceDetailUi";

const PlaceDetail = () => {
  const { applyedPlaces } = applyedPlacesStore((state) => state);
  return (
    <div className="h-full overflow-scroll overflow-x-hidden p-2">
      {applyedPlaces?.map((place) => (
        <div key={place.id}>
          <PlaceDetailUi place={place} />
        </div>
      ))}
    </div>
  );
};

export default PlaceDetail;
