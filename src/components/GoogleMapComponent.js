import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline
} from "@react-google-maps/api";

const containerStyle = {
  height: "100vh",
  width: "100%"
};

// 佐賀大学
const center = {
  lat: 33.24194428301201,
  lng: 130.2903679388433
};

// firestoreから取得
const ansPos = {
  lat: 33.37237365922299,
  lng: 130.20645664905373
};

const GoogleMapComponent = ({
  setSelectedPosition,
  isSubmitted,
  setDistance
}) => {
  const [pin, setPin] = useState();

  const setLatLng = props => {
    const pos = {
      lat: props.latLng.lat(),
      lng: props.latLng.lng()
    };
    setPin(pos);
    setSelectedPosition(pos);
  };

  function haversineDistance(pos, ans) {
    var R = 6371.071; // Radius of the Earth in miles
    var rlat1 = pos.lat * (Math.PI / 180);
    // Convert degrees to radians
    var rlat2 = ans.lat * (Math.PI / 180);
    // Convert degrees to radians
    var difflat = rlat2 - rlat1; // Radian difference (latitudes)
    var difflon = (ans.lng - pos.lng) * (Math.PI / 180); // Radian difference (longitudes)

    var d =
      2 *
      R *
      Math.asin(
        Math.sqrt(
          Math.sin(difflat / 2) * Math.sin(difflat / 2) +
            Math.cos(rlat1) *
              Math.cos(rlat2) *
              Math.sin(difflon / 2) *
              Math.sin(difflon / 2)
        )
      );
    return d;
  }

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10.5}
        onClick={setLatLng}>
        {pin && <Marker position={pin} />}
        {pin && isSubmitted && (
          <>
            <Polyline
              path={getLatLngPolyline({ origin: ansPos, destination: pin })}
            />
            {setDistance(haversineDistance(pin, ansPos))}
          </>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

const getLatLngPolyline = ({ origin, destination }) => [
  { lat: origin.lat, lng: origin.lng },
  { lat: destination.lat, lng: destination.lng }
];

export default GoogleMapComponent;
