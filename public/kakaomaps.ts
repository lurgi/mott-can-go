export function kakaoScript() {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API}&autoload=false`;
  document.body.appendChild(script);
  return script;
}

export function kakaoOnload() {
  window.kakao.maps.load(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);
  });
}
