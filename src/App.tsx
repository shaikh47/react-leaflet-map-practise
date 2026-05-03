import "./App.css";
import { MapProvider } from "./context";
import MapView from "./components/map/components";
import Dashboard from "./components/dashboard";

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
