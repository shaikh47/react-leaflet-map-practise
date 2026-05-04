import "./App.css";
import { MapProvider } from "./context";
import Dashboard from "./components/dashboard";
import MapView from "./components/map";

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
