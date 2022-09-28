import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  height: "100vh",
  width: "100%"
};

// 佐賀大学
const center = {
  lat: 33.24194428301201,
  lng: 130.2903679388433
};

const GoogleMapComponent = ({ setSubmitPosition }) => {
  const [pin, setPin] = useState();

  const setLatLng = props => {
    const pos = {
      lat: props.latLng.lat(),
      lng: props.latLng.lng()
    };
    setPin(pos);
    setSubmitPosition(pos);
  };
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10.5}
        onClick={setLatLng}>
        {pin && <Marker position={pin} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
