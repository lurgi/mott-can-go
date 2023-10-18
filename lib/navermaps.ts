import { PlaceType } from "./types/naver-types";

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

  const seongsuBound = new naver.maps.LatLngBounds(
    new naver.maps.LatLng(...minLatLng),
    new naver.maps.LatLng(...maxLatLng)
  );

  const map = new naver.maps.Map("map", {
    center: new naver.maps.LatLng(
      (minLatLng[0] + maxLatLng[0]) / 2,
      (minLatLng[1] + maxLatLng[1]) / 2
    ),
    zoom: 15,
    maxBounds: seongsuBound,
  });
  return map;
}

function getMinMaxLatLng(places: PlaceType[]) {
  let minLatLng: [number, number] = [Infinity, Infinity];
  let maxLatLng: [number, number] = [0, 0];
  for (const { longitude, latitude } of places) {
    if (minLatLng[1] > +longitude) minLatLng[1] = +longitude;
    if (minLatLng[0] > +latitude) minLatLng[0] = +latitude;
    if (maxLatLng[1] < +longitude) maxLatLng[1] = +longitude;
    if (maxLatLng[0] < +latitude) maxLatLng[0] = +latitude;
  }

  return { minLatLng, maxLatLng };
}

let applyedPlaces: PlaceType[] = [];

export function getApplyedPlaces() {
  return applyedPlaces;
}

export function applyPlaces(places: PlaceType[], map: naver.maps.Map) {
  applyedPlaces = [];
  for (const place of places) {
    if (isPlaceInBound({ place, map }) && applyedPlaces.length < 30) {
      const marker = makeMarker(place, map);
      makeInfoWindow(place, map, marker);
      applyedPlaces.push(place);
    }
  }
}

function isPlaceInBound({
  place,
  map,
}: {
  place: PlaceType;
  map: naver.maps.Map;
}) {
  const { x: maxLon, y: maxLat } = map.getBounds().getMax();
  const { x: minLon, y: minLat } = map.getBounds().getMin();
  return (
    +place.latitude > minLat &&
    +place.latitude < maxLat &&
    +place.longitude > minLon &&
    +place.longitude < maxLon
  );
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
  let isCafe = isCafeInType(place.type);

  return new naver.maps.Marker({
    position: new naver.maps.LatLng(+place.latitude, +place.longitude),
    map,
    icon: {
      content: isCafe ? iconElement.cafeIcon : iconElement.othersIcon,
    },
    title: place.name,
  });
}

function isCafeInType(types: string[]) {
  for (const type of types) {
    if (type === "카페") {
      return true;
    }
  }
  return false;
}

const makeContentString = (place: PlaceType) => {
  return `
  <div class="info_container">
    <div class="info_img_div">
      <img class="info_img" src="${place.images[0]}"/>
    </div>
    <div class="info_detail font-noto_sans_kr">
      <p class="info_title">
        ${place.name}
      </p>
      ${
        place.description
          ? `<p class="info_description">
        ${place.description} 
      </p>`
          : ""
      }
      <p class="info_link">
        <a href="https://m.place.naver.com/restaurant/${
          place.naverId
        }/home" target="_blank">
          자세히 보기 &rarr;
        </a>
      </p>
    </div>
  </div>
  `;
};

function makeInfoWindow(
  place: PlaceType,
  map: naver.maps.Map,
  marker: naver.maps.Marker
) {
  const contentString = makeContentString(place);
  const infoWindow = new naver.maps.InfoWindow({
    content: contentString,
    borderColor: "#55efc4",
  });
  naver.maps.Event.addListener(marker, "click", () => {
    if (!infoWindow.getMap()) infoWindow.open(map, marker);
    else infoWindow.close();
  });
  naver.maps.Event.addListener(map, "click", () => {
    if (infoWindow.getMap()) infoWindow.close();
  });
}
