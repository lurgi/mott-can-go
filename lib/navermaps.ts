export function naverMpaScript() {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`;
  document.body.appendChild(script);
  return script;
}

export function naverOnLoad() {
  var map = new naver.maps.Map("map", {
    center: new naver.maps.LatLng(37.5446817, 127.0570111),
    zoom: 14,
  });
  return map;
}

interface PlaceType {
  latitude: string;
  longitude: string;
  name: string;
  description: string;
  type: string[];
  naverId: string;
  address: string;
}

function makeMarker(place: PlaceType, map: naver.maps.Map) {
  return new naver.maps.Marker({
    position: new naver.maps.LatLng(+place.latitude, +place.longitude),
    map,
  });
}

function makeInfoWindow(
  place: PlaceType,
  map: naver.maps.Map,
  marker: naver.maps.Marker
) {
  const contentString = `
      <div>${place.name}</div>
    `;
  const infoWindow = new naver.maps.InfoWindow({
    content: contentString,
  });
  naver.maps.Event.addListener(marker, "click", () => {
    if (!infoWindow.getMap()) infoWindow.open(map, marker);
    else infoWindow.close();
  });
}

export function applyPlaces(places: PlaceType[], map: naver.maps.Map) {
  for (const place of places) {
    const marker = makeMarker(place, map);
    makeInfoWindow(place, map, marker);
  }
}
