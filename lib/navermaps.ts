export function naverMpaScript() {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`;
  document.body.appendChild(script);
  return script;
}

export function naverOnLoad(places: PlaceType[]) {
  let {
    minLatLng,
    maxLatLng,
  }: { minLatLng: [number, number]; maxLatLng: [number, number] } =
    getMinMaxLatLng(places);

  const seongsu = new naver.maps.LatLngBounds(
    new naver.maps.LatLng(...minLatLng),
    new naver.maps.LatLng(...maxLatLng)
  );
  const map = new naver.maps.Map("map", {
    center: new naver.maps.LatLng(
      (minLatLng[0] + maxLatLng[0]) / 2,
      (minLatLng[1] + maxLatLng[1]) / 2
    ),
    zoom: 15,
    maxBounds: seongsu,
  });
  return map;
}

function getMinMaxLatLng(places: PlaceType[]) {
  let minLatLng: [number, number] = [Infinity, Infinity];
  let maxLatLng: [number, number] = [0, 0];
  for (const { longitude, latitude, type } of places) {
    if (minLatLng[1] > +longitude) minLatLng[1] = +longitude;
    if (minLatLng[0] > +latitude) minLatLng[0] = +latitude;
    if (maxLatLng[1] < +longitude) maxLatLng[1] = +longitude;
    if (maxLatLng[0] < +latitude) maxLatLng[0] = +latitude;
  }

  return { minLatLng, maxLatLng };
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

export function applyPlaces(places: PlaceType[], map: naver.maps.Map) {
  for (const place of places) {
    const marker = makeMarker(place, map);
    makeInfoWindow(place, map, marker);
  }
}

const iconElement = {
  othersIcon: `<div style="transform: translate(-50%,-100%);">
      <i class="fa-solid fa-location-pin fa-2xl" style="transform:scale(1.2); color:#0984e3; position:relative;">
        <i class="fa-solid fa-circle fa-2xs" style="position:absolute; color:white; left:2px; top:-4px;"></i>
        <i class="fa-solid fa-star fa-2xs" style="position:absolute; color:#0984e3; left:1px; top:-5px; transform:scale(0.7);"></i>
      </i>
      </div>`,
  cafeIcon: `<div style="transform: translate(-50%,-100%);">
      <i class="fa-solid fa-location-pin fa-2xl" style="transform:scale(1.3); color:#ff7675; position:relative;">
        <i class="fa-solid fa-circle fa-2xs" style="position:absolute; color:white; left:2px; top:-4px;"></i>
        <i class="fa-solid fa-mug-saucer fa-2xs" style="position:absolute; color:#ff7675; left:-1px; top:-4px; transform:scale(0.55);"></i>
      </i>
      </div>`,
};

function makeMarker(place: PlaceType, map: naver.maps.Map) {
  let isCafe = false;
  for (const type of place.type) {
    if (type === "카페") {
      isCafe = true;
      break;
    }
  }
  return new naver.maps.Marker({
    position: new naver.maps.LatLng(+place.latitude, +place.longitude),
    map,
    icon: {
      content: isCafe ? iconElement.cafeIcon : iconElement.othersIcon,
    },
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
