import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  height: "100vh",
  width: "100%"
};

const center = {
  lat: 33.24194428301201,
  lng: 130.2903679388433
};

const targetPosition = {
  lat: 33.24490720899812,
  lng: 130.29212694850503
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        <Marker position={targetPosition} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
