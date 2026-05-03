import { useState } from "react";
import { Marker, Popup, Polyline, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { useMapContext } from "../../../context/MapContext";

function DropPin() {
  const { setPins, setDistance, userPosition } = useMapContext();
  const [position, setPosition] = useState<L.LatLng | null>(null);
  const map = useMap();

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      setPins([e.latlng]);
      if (userPosition) {
        setDistance(map.distance(userPosition, e.latlng));
      }
    },
  });

  return position === null ? null : (
    <>
      <Marker position={position}>
        <Popup>Dropped pin</Popup>
      </Marker>
      {userPosition && <Polyline positions={[userPosition, position]} />}
    </>
  );
}

export default DropPin;
