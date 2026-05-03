import React from "react";
import { Circle, Popup } from "react-leaflet";
import { useMapContext } from "../../../context/MapContext";
import { formatRadius, calculateCircleArea } from "../utils/circleService";
import { useCircleDrawing } from "../hooks/useCircleDrawing";

/**
 * DrawCircle component - handles rendering and drawing circles on the map.
 * Uses custom hook for drawing logic to keep the component focused on presentation.
 */
const DrawCircle: React.FC = () => {
  const { circles } = useMapContext();
  const { circleDrawing } = useCircleDrawing();

  return (
    <>
      {/* Temporary circle while drawing */}
      {circleDrawing && (
        <Circle
          center={circleDrawing.center}
          radius={circleDrawing.currentRadius}
          pathOptions={{
            color: "#3388ff",
            weight: 2,
            opacity: 0.7,
            fillColor: "#3388ff",
            fillOpacity: 0.1,
            dashArray: "5, 5",
          }}
        />
      )}

      {/* Render all saved circles */}
      {circles.map((circle) => {
        const area = calculateCircleArea(circle.radius);
        return (
          <Circle
            key={circle.id}
            center={circle.center}
            radius={circle.radius}
            pathOptions={{
              color: "#22aa00",
              weight: 2,
              opacity: 0.8,
              fillColor: "#22aa00",
              fillOpacity: 0.15,
            }}
          >
            <Popup>
              <div style={{ fontSize: "12px" }}>
                <p>
                  <strong>Radius:</strong> {formatRadius(circle.radius)}
                </p>
                <p>
                  <strong>Area:</strong> {area.toFixed(2)} km²
                </p>
                <p>
                  <strong>Center:</strong> {circle.center.lat.toFixed(4)},
                  {circle.center.lng.toFixed(4)}
                </p>
              </div>
            </Popup>
          </Circle>
        );
      })}
    </>
  );
};

export default DrawCircle;
