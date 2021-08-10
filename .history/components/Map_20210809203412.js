import ReactMapGL from "react-map-gl";

function Map() {
    const view
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/tseringkalden/cks5hnuzn75k718nn97488lj1"
      mapboxApiAccessToken={process.env.mapbox_key}
    ></ReactMapGL>
  );
}

export default Map;
