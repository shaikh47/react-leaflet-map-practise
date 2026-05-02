import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { useMapContext } from "../../context/MapContext";

function MyLocationMarker() {
  const [position, setPosition] = useState(null);
  const { setUserPosition } = useMapContext();
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      setUserPosition(e.latlng);
      //   map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default MyLocationMarker;
