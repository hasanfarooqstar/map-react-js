import "./App.css";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

export default function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApikey: "AIzaSyDpICQ0ywhJWL484i8jMbzzgQ5uciKmLq4",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <div className="app-container">
        <div className="nav bg-green-700">
          <div className="search-bar">
            <input
              className="input-bar ml-5"
              type="text"
              name="box"
              placeholder="Type Here to Search Anything on GOOGLE MAP"
            />
            <span className="search-icon mr-1">
              <i className="fa-solid fa-magnifying-glass-location"></i>
            </span>
          </div>
        </div>

        <Map />
      </div>
    </>
  );
}

function Map() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName="map-container"
    ></GoogleMap>
  );
}
