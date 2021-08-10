import ReactMapGL from "react-map-gl";

function Map() {
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/tseringkalden/cks5hnuzn75k718nn97488lj1"
      mapboxApiAccessToken="process.env"
    ></ReactMapGL>
  );
}

export default Map;
