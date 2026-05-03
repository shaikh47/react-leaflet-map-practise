import L from "leaflet";

export const calculateDistance = (
  point1: L.LatLng,
  point2: L.LatLng,
): number => {
  return point1.distanceTo(point2);
};

export const formatRadius = (radiusInMeters: number): string => {
  if (radiusInMeters >= 1000) {
    return `${(radiusInMeters / 1000).toFixed(2)} km`;
  }
  return `${Math.round(radiusInMeters)} m`;
};

export const calculateCircleArea = (radiusInMeters: number): number => {
  const radiusInKm = radiusInMeters / 1000;
  return Math.PI * Math.pow(radiusInKm, 2);
};

export const generateCircleId = (): string => {
  return `circle-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};
