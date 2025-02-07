import Map, { type StyleSpecification } from "react-map-gl/maplibre";

import "maplibre-gl/dist/maplibre-gl.css";

import mapstyle from "./mapstyle/tmap.json";

function App() {
  return (
    <div className="mapContainer">
      <Map
        hash={true}
        initialViewState={{
          longitude: 8,
          latitude: 53,
          zoom: 8,
        }}
        mapStyle={mapstyle as StyleSpecification}
      ></Map>
    </div>
  );
}

export default App;
