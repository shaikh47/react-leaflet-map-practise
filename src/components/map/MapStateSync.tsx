import { useMapEvents } from "react-leaflet";
import { useMapContext } from "../../context/MapContext";

function MapStateSync() {
  const { setCenter, setZoom } = useMapContext();
  useMapEvents({
    move(e) {
      const { lat, lng } = e.target.getCenter();
      setCenter([lat, lng]);
    },
    zoomend(e) {
      setZoom(e.target.getZoom());
    },
  });
  return null;
}

export default MapStateSync;
