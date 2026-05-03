import type { LatLng } from "leaflet";
import type { Circle, DrawingMode } from "./circle.types";

export interface MapState {
  center: [number, number];
  zoom: number;
  tileIndex: number;
  pins: LatLng[];
  distance: number | null;
  userPosition: LatLng | null;
  circles: Circle[];
  drawingMode: DrawingMode;
  setCenter: (center: [number, number]) => void;
  setZoom: (zoom: number) => void;
  setTileIndex: (index: number) => void;
  setPins: (pins: LatLng[]) => void;
  clearPins: () => void;
  clearLastPin: () => void;
  setDistance: (d: number | null) => void;
  setUserPosition: (pos: LatLng | null) => void;
  addCircle: (circle: Circle) => void;
  removeCircle: (circleId: string) => void;
  clearCircles: () => void;
  setDrawingMode: (mode: DrawingMode) => void;
}
