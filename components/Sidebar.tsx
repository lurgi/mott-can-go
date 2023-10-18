"use client";
import applyedPlacesStore from "@/lib/zustand/applyedPlaceStore";
import SideBarPlaceDetail from "./Sidebar/SideBarPlaceDetail";

const SideBar = () => {
  const { applyedPlaces } = applyedPlacesStore((state) => state);
  return (
    <div className="hidden sm:block w-[350px] md:w-[400px] h-full overflow-scroll overflow-x-hidden p-2">
      {applyedPlaces?.map((place) => (
        <div key={place.id}>
          <SideBarPlaceDetail place={place} />
        </div>
      ))}
    </div>
  );
};

export default SideBar;
