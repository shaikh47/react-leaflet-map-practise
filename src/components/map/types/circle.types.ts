import type { LatLng } from "leaflet";

export interface Circle {
  id: string;
  center: LatLng;
  radius: number; // in meters
}

export type DrawingMode = "normal" | "circle";
