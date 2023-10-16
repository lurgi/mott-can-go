"use client";
import applyedPlacesStore from "@/lib/zustand/applyedPlaceStore";

const SideBar = () => {
  const { applyedPlaces } = applyedPlacesStore((state) => state);
  return (
    <div className="hidden sm:block w-[350px] md:w-[400px] pt-16">
      {applyedPlaces?.map((place) => (
        <div key={place.id}>{place.name}</div>
      ))}
    </div>
  );
};

export default SideBar;
