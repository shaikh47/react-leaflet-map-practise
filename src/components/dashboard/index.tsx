import React from "react";
import "./Dashboard.css";
import { useMapContext } from "../../context/MapContext";
import type { DrawingMode } from "../map/types/circle.types";
import { MapSelector } from "./MapSelector";

const Dashboard: React.FC = () => {
  const {
    zoom,
    center,
    distance,
    pins,
    circles,
    drawingMode,
    clearPins,
    clearLastPin,
    setDrawingMode,
    clearCircles,
  } = useMapContext();
  const hasAtLeastOnePin = pins.length > 0;
  const hasCircles = circles.length > 0;

  const handleModeChange = (mode: DrawingMode) => {
    setDrawingMode(mode);
  };

  const getModeButtonStyle = (mode: DrawingMode) => ({
    padding: "8px 12px",
    backgroundColor: drawingMode === mode ? "#007bff" : "#6c757d",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: drawingMode === mode ? "600" : "400",
  });

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-section">
          <h3>Drawing Mode</h3>
          <p className="info-item">
            Current Mode:{" "}
            <span
              className="info-value"
              style={{
                color:
                  drawingMode === "normal"
                    ? "#28a745"
                    : drawingMode === "circle"
                      ? "#007bff"
                      : "#ff6b6b",
                fontWeight: "600",
              }}
            >
              {drawingMode.charAt(0).toUpperCase() + drawingMode.slice(1)}
            </span>
          </p>
          <div style={{ display: "flex", gap: "8px", flexDirection: "column" }}>
            <button
              onClick={() => handleModeChange("normal")}
              style={getModeButtonStyle("normal")}
            >
              Normal Mode (Drag Map)
            </button>
            <button
              onClick={() => handleModeChange("circle")}
              style={getModeButtonStyle("circle")}
            >
              Circle Mode (Click & Drag)
            </button>
          </div>
        </div>
        <div className="dashboard-section">
          <h3>Map Info</h3>
          <p className="info-item">
            Status: <span className="info-value">Active</span>
          </p>
          <p className="info-item">
            Zoom Level: <span className="info-value">{zoom}</span>
          </p>
          <p className="info-item">
            Latitude: <span className="info-value">{center[0].toFixed(4)}</span>
          </p>
          <p className="info-item">
            Longitude:{" "}
            <span className="info-value">{center[1].toFixed(4)}</span>
          </p>
        </div>
        {distance !== null && pins.length > 1 && (
          <div className="dashboard-section">
            <h3>Pin Info</h3>
            <p className="info-item">
              Distance from origin:{" "}
              <span className="info-value">
                {distance >= 1000
                  ? `${(distance / 1000).toFixed(2)} km`
                  : `${Math.round(distance)} m`}
              </span>
            </p>
          </div>
        )}
        {hasCircles && (
          <div className="dashboard-section">
            <h3>Circle Info</h3>
            <p className="info-item">
              Total Circles:{" "}
              <span className="info-value">{circles.length}</span>
            </p>
            <div
              style={{ display: "flex", gap: "8px", flexDirection: "column" }}
            >
              <button
                onClick={clearCircles}
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Clear All Circles
              </button>
            </div>
          </div>
        )}
        {hasAtLeastOnePin && (
          <div className="dashboard-section">
            <h3>Pin Controls</h3>
            <div
              style={{ display: "flex", gap: "8px", flexDirection: "column" }}
            >
              <button
                onClick={clearLastPin}
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#ffc107",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Clear Last Pin
              </button>
              <button
                onClick={clearPins}
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Clear All Pins
              </button>
            </div>
          </div>
        )}
      </div>
      <MapSelector />
    </div>
  );
};

export default Dashboard;
