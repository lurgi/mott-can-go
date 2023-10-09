"use client";

import { kakaoOnload, kakaoScript } from "@/public/kakaomaps";
import { useEffect } from "react";

declare global {
  interface window {
    kakao: any;
  }
}

const KakaoMap = () => {
  useEffect(() => {
    const kakao_script = kakaoScript();

    kakao_script.onload = () => {
      kakaoOnload();
    };
  }, []);
  return <div id="map" className="w-screen h-[80vh]"></div>;
};

export default KakaoMap;
