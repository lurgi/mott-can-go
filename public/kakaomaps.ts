export function naverMpaScript() {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`;
  document.body.appendChild(script);
  return script;
}

export function naverOnLoad() {
  var map = new naver.maps.Map("map");
}
