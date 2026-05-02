import "./App.css";
import { MapProvider } from "./context/MapContext";
import MapView from "./mapData/MapView";
import Dashboard from "./control/Dashboard";

function App() {
  return (
    <MapProvider>
      <div className="app-container">
        <Dashboard />
        <MapView />
      </div>
    </MapProvider>
  );
}

export default App;
