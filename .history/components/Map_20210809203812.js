import { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
    const [viewport, setViewport = useState({
        width: '100%',
        height: '100%',
        latitude: 37.7577,
        longitude: -122.
    })
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/tseringkalden/cks5hnuzn75k718nn97488lj1"
      mapboxApiAccessToken={process.env.mapbox_key}
    ></ReactMapGL>
  );
}

export default Map;
