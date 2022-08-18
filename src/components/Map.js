import React from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
function Map({ lati, longi }) {
  const onLoad = (marker) => {
    // console.log("marker: ", marker);
    // console.log(position);
  };
  return (
    <>
      <GoogleMap
        zoom={18}
        center={{ lat: lati, lng: longi }}
        mapContainerClassName="map-container"
      >
        <MarkerF onLoad={onLoad} position={{ lat: lati, lng: longi }} />
      </GoogleMap>
    </>
  );
}
export default Map;
