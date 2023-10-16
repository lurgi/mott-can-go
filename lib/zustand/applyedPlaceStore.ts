import { create } from "zustand";
import { PlaceType } from "../navermaps";

interface ApplyedPlacesStore {
  applyedPlaces: PlaceType[];
  setApplyedPlace: (places: PlaceType[]) => void;
}

const applyedPlacesStore = create<ApplyedPlacesStore>((set, get) => ({
  applyedPlaces: [],
  setApplyedPlace: (places) =>
    set(() => ({
      applyedPlaces: places,
    })),
}));

export default applyedPlacesStore;
