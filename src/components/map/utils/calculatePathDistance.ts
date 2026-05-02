import type { LatLngExpression } from "leaflet";
import type { Map } from "leaflet";

export const calculatePathDistance = (
  coordinates: LatLngExpression[],
  map: Map,
): number | null => {
  if (!coordinates || coordinates.length < 2) return null;

  let totalDistance = 0;
  for (let i = 0; i < coordinates.length - 1; i++) {
    totalDistance += map.distance(coordinates[i], coordinates[i + 1]);
  }
  return totalDistance;
};
