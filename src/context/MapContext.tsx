import { createContext, useContext, useState, type ReactNode } from "react";
import type { LatLng } from "leaflet";
import type { MapState } from "../components/map/types/map.types";

export const DEFAULT_POSITION: [number, number] = [23.8233, 90.365];

const MapContext = createContext<MapState | null>(null);

export function MapProvider({ children }: { children: ReactNode }) {
  const [center, setCenter] = useState<[number, number]>(DEFAULT_POSITION);
  const [zoom, setZoom] = useState<number>(13);
  const [tileIndex, setTileIndex] = useState<number>(0);
  const [pins, setPins] = useState<LatLng[]>([]);
  const [distance, setDistance] = useState<number | null>(null);
  const [userPosition, setUserPosition] = useState<LatLng | null>(null);

  const clearPins = () => setPins([]);
  const clearLastPin = () => setPins((prev) => prev.slice(0, -1));

  return (
    <MapContext.Provider
      value={{
        center,
        zoom,
        tileIndex,
        pins,
        distance,
        userPosition,
        setCenter,
        setZoom,
        setTileIndex,
        setPins,
        clearPins,
        clearLastPin,
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
