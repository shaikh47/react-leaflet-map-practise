import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapView.css";
import DropMultiplePin from "./components/DropMultiplePin";
import DrawCircle from "./components/DrawCircle";
import ImageOverlay from "./components/ImageOverlay";
import { TILE_PROVIDERS } from "./constants/providers";
import { useMapContext } from "../../context/MapContext";
import MapStateSync from "./components/MapStateSync";
import MyLocationMarker from "./components/MyLocationMarker";

const MapView: React.FC = () => {
  const { center, zoom, tileIndex, drawingMode } = useMapContext();
  const isDraggingDisabled = drawingMode !== "normal";

  return (
    <div style={{ flex: 1, height: "100vh" }}>
      <MapContainer
        center={center}
        zoom={zoom}
        dragging={!isDraggingDisabled}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution={TILE_PROVIDERS[tileIndex].attribution}
          url={TILE_PROVIDERS[tileIndex].url}
        />
        <MapStateSync />
        <MyLocationMarker />
        {!isDraggingDisabled && <DropMultiplePin />}
        <DrawCircle />
        <ImageOverlay />
      </MapContainer>
    </div>
  );
};

export default MapView;
