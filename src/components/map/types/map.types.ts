import type { LatLng } from "leaflet";

export interface MapState {
  center: [number, number];
  zoom: number;
  tileIndex: number;
  pins: LatLng[];
  distance: number | null;
  userPosition: LatLng | null;
  setCenter: (center: [number, number]) => void;
  setZoom: (zoom: number) => void;
  setTileIndex: (index: number) => void;
  setPins: (pins: LatLng[]) => void;
  clearPins: () => void;
  clearLastPin: () => void;
  setDistance: (d: number | null) => void;
  setUserPosition: (pos: LatLng | null) => void;
}
