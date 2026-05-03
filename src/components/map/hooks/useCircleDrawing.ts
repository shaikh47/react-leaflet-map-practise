import { useState } from "react";
import { useMapEvent } from "react-leaflet";
import L from "leaflet";
import { useMapContext } from "../../../context/MapContext";
import type { Circle as CircleType } from "../types/circle.types";
import { calculateDistance, generateCircleId } from "../utils/circleService";

interface CircleDrawing {
  center: L.LatLng;
  currentRadius: number;
}

export const useCircleDrawing = () => {
  const { drawingMode, addCircle } = useMapContext();
  const [circleDrawing, setCircleDrawing] = useState<CircleDrawing | null>(
    null,
  );

  useMapEvent("mousedown", (e) => {
    if (drawingMode !== "circle") return;
    setCircleDrawing({
      center: e.latlng,
      currentRadius: 0,
    });
  });

  useMapEvent("mousemove", (e) => {
    if (circleDrawing === null) return;

    const newRadius = calculateDistance(circleDrawing.center, e.latlng);

    setCircleDrawing((prev) => {
      if (!prev) return null;
      return { ...prev, currentRadius: newRadius };
    });
  });

  useMapEvent("mouseup", () => {
    if (circleDrawing === null || circleDrawing.currentRadius < 5) {
      setCircleDrawing(null);
      return;
    }

    const newCircle: CircleType = {
      id: generateCircleId(),
      center: circleDrawing.center,
      radius: circleDrawing.currentRadius,
    };

    addCircle(newCircle);
    setCircleDrawing(null);
  });

  return { circleDrawing };
};
