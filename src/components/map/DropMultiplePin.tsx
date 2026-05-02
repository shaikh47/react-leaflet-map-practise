import { useEffect } from "react";
import { Marker, Popup, Polyline, useMap, useMapEvents } from "react-leaflet";
import { calculatePathDistance } from "./utils/calculatePathDistance";
import { useMapContext } from "../../context/MapContext";

function DropMultiplePin() {
  const { pins, setPins, setDistance } = useMapContext();
  const hasMultiplePins = pins.length > 1;
  const map = useMap();

  useEffect(() => {
    const distance = calculatePathDistance(pins, map);
    setDistance(distance);
  }, [pins, map, setDistance]);

  useMapEvents({
    click(e) {
      const updatedPins = [...pins, e.latlng];
      setPins(updatedPins);
    },
  });

  return pins.length === 0 ? null : (
    <>
      {pins.map((position, key) => (
        <Marker key={key} position={position}>
          <Popup>Dropped pin</Popup>
        </Marker>
      ))}
      {hasMultiplePins &&
        pins.map((position, index) => {
          if (index === pins.length - 1) return null;

          return (
            <Polyline key={index} positions={[position, pins[index + 1]]} />
          );
        })}
    </>
  );
}

export default DropMultiplePin;
