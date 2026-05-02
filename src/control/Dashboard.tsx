import React from "react";
import "./Dashboard.css";
import { useMapContext } from "../context/MapContext";

const Dashboard: React.FC = () => {
  const { zoom, center, distance } = useMapContext();

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
      </div>
      <div className="dashboard-content">
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
        {distance !== null && (
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
      </div>
    </div>
  );
};

export default Dashboard;
