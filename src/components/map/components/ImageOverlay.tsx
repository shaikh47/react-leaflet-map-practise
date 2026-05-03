import React from "react";
import { ImageOverlay as LeafletImageOverlay } from "react-leaflet";
import { DEFAULT_POSITION } from "../../../context/MapContext";

const IMAGE_URL = "/overlay.png";

const DELTA = 0.001;
const bounds: [[number, number], [number, number]] = [
  [DEFAULT_POSITION[0] - DELTA, DEFAULT_POSITION[1] - DELTA],
  [DEFAULT_POSITION[0] + DELTA, DEFAULT_POSITION[1] + DELTA],
];

const ImageOverlay: React.FC = () => {
  return (
    <LeafletImageOverlay
      url={IMAGE_URL}
      bounds={bounds}
      opacity={0.9}
      className="leaflet-no-select"
    />
  );
};

export default ImageOverlay;
