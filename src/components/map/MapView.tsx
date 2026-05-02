import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapStateSync from "./MapStateSync";
import MyLocationMarker from "./MyLocationMarker";
import DropMultiplePin from "./DropMultiplePin";
import { TILE_PROVIDERS } from "./constants/providers";
import { useMapContext } from "../../context/MapContext";

const MapView: React.FC = () => {
  const { center, zoom, tileIndex } = useMapContext();

  return (
    <div style={{ flex: 1, height: "100vh" }}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution={TILE_PROVIDERS[tileIndex].attribution}
          url={TILE_PROVIDERS[tileIndex].url}
        />
        <MapStateSync />
        <MyLocationMarker />
        <DropMultiplePin />
      </MapContainer>
    </div>
  );
};

export default MapView;
