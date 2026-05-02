import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { useMapContext } from "../../context/MapContext";
import L from "leaflet";

const customIcon = L.divIcon({
  className: "custom-pin",
  html: `<div style="
    background-color: #ff4444; 
    width: 25px; 
    height: 25px; 
    border-radius: 50% 50% 50% 0; 
    transform: rotate(-45deg);
    border: 2px solid white;
  ">
    <div style="
            background-color: #f5b3b3;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            margin-left: 5px;
            margin-top: 6px;
        "></div>
  </div>`,
  iconSize: [30, 30],
  iconAnchor: [15, 30], // Points the bottom of the pin to the coordinate
});

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
    <Marker position={position} icon={customIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default MyLocationMarker;
