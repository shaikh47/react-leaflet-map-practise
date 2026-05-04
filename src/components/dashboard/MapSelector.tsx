import carto from "../../assets/dashboard/carto.png";
import open_street from "../../assets/dashboard/open_street.png";
import stamen from "../../assets/dashboard/stamen.png";
import { useMapContext } from "../../context/MapContext";

export const MapSelector = () => {
  const { tileIndex, setTileIndex } = useMapContext();

  const mapTiles = [
    { label: "OPEN STREET", src: open_street },
    { label: "Stamen", src: stamen },
    { label: "Carto", src: carto },
  ];

  return (
    <div className="map-selector-container">
      {mapTiles.map((tile, index) => (
        <div key={index} className="map-tile-wrapper">
          <div
            className={`map-tile-box ${tileIndex === index ? "active" : ""}`}
            onClick={() => setTileIndex(index)}
          >
            <img
              src={tile.src}
              alt={`${tile.label} map preview`}
              className="map-tile-image"
            />
          </div>
          <p className="map-tile-label">{tile.label}</p>
        </div>
      ))}
    </div>
  );
};
