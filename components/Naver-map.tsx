"use client";

import { naverMpaScript, naverOnLoad, applyPlaces } from "@/lib/navermaps";
import { useEffect } from "react";

const places = require("@/public/pet-place.json");

const KakaoMap = () => {
  useEffect(() => {
    const naverScript = naverMpaScript();
    naverScript.onload = async () => {
      const map = naverOnLoad();
      applyPlaces(places, map);
    };
  }, []);
  return <div id="map" className="w-full h-screen"></div>;
};

export default KakaoMap;
