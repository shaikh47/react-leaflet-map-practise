import { createContext, useContext, useState, type ReactNode } from "react";
import type { LatLng } from "leaflet";

export const DEFAULT_POSITION: [number, number] = [23.8233, 90.365];

interface MapState {
  center: [number, number];
  zoom: number;
  tileIndex: number;
  pinPosition: LatLng | null;
  distance: number | null;
  userPosition: LatLng | null;
  setCenter: (center: [number, number]) => void;
  setZoom: (zoom: number) => void;
  setTileIndex: (index: number) => void;
  setPinPosition: (pos: LatLng | null) => void;
  setDistance: (d: number | null) => void;
  setUserPosition: (pos: LatLng | null) => void;
}

const MapContext = createContext<MapState | null>(null);

export function MapProvider({ children }: { children: ReactNode }) {
  const [center, setCenter] = useState<[number, number]>(DEFAULT_POSITION);
  const [zoom, setZoom] = useState<number>(13);
  const [tileIndex, setTileIndex] = useState<number>(0);
  const [pinPosition, setPinPosition] = useState<LatLng | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [userPosition, setUserPosition] = useState<LatLng | null>(null);

  return (
    <MapContext.Provider
      value={{
        center,
        zoom,
        tileIndex,
        pinPosition,
        distance,
        userPosition,
        setCenter,
        setZoom,
        setTileIndex,
        setPinPosition,
        setDistance,
        setUserPosition,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}

export function useMapContext(): MapState {
  const ctx = useContext(MapContext);
  if (!ctx) throw new Error("useMapContext must be used within MapProvider");
  return ctx;
}
