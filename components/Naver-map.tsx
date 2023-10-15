"use client";

import { naverMpaScript, naverOnLoad, applyPlaces } from "@/lib/navermaps";
import { useEffect } from "react";

const places = require("@/public/pet-place.json");

const NaverMap = () => {
  useEffect(() => {
    const naverScript = naverMpaScript();
    naverScript.onload = async () => {
      const map = naverOnLoad(places);
      applyPlaces(places, map);
      naver.maps.Event.addListener(map, "idle", function () {
        applyPlaces(places, map);
      });
    };
  }, []);
  return <div id="map" className="w-full h-screen"></div>;
};

export default NaverMap;
