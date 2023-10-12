"use client";

import { naverMpaScript, naverOnLoad } from "@/public/kakaomaps";
import { useEffect } from "react";

const KakaoMap = () => {
  useEffect(() => {
    const kakao_script = naverMpaScript();

    kakao_script.onload = () => {
      naverOnLoad();
    };
  }, []);
  return <div id="map" className="w-full h-screen"></div>;
};

export default KakaoMap;
