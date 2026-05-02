import React, { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { TILE_PROVIDERS } from "./constants/providers";
import { useMapContext } from "../context/MapContext";

function MapStateSync() {
  const { setCenter, setZoom } = useMapContext();
  useMapEvents({
    moveend(e) {
      const { lat, lng } = e.target.getCenter();
      setCenter([lat, lng]);
    },
    zoomend(e) {
      setZoom(e.target.getZoom());
    },
  });
  return null;
}

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
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function DropPin() {
  const { setPinPosition, setDistance, userPosition } = useMapContext();
  const [position, setPosition] = useState(null);
  const map = useMap();

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      setPinPosition(e.latlng);
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
        <DropPin />
      </MapContainer>
    </div>
  );
};

export default MapView;
