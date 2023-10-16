"use client";

import {
  naverMpaScript,
  naverOnLoad,
  applyPlaces,
  getApplyedPlaces,
} from "@/lib/navermaps";
import applyedPlacesStore from "@/lib/zustand/applyedPlaceStore";
import { useEffect } from "react";

const places = require("@/public/pet-place.json");

const NaverMap = () => {
  const { setApplyedPlace } = applyedPlacesStore((state) => state);
  useEffect(() => {
    const naverScript = naverMpaScript();
    naverScript.onload = async () => {
      const map = naverOnLoad(places);
      applyPlaces(places, map);
      setApplyedPlace(getApplyedPlaces());
      naver.maps.Event.addListener(map, "idle", function () {
        applyPlaces(places, map);
        setApplyedPlace(getApplyedPlaces());
      });
    };
  }, []);
  return <div id="map" className="w-full h-screen"></div>;
};

export default NaverMap;
