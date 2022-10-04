import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline
} from "@react-google-maps/api";

// 佐賀市
const center = {
  lat: 33.267013532073044,
  lng: 130.30365519169072
};

const GoogleMapComponent = ({
  setSelectedPosition,
  isSubmitted,
  setDistance,
  containerStyle,
  ansPos
}) => {
  const [pin, setPin] = useState();
  let ansPosObj;
  if (ansPos) {
    ansPosObj = {
      lat: ansPos._lat,
      lng: ansPos._long
    };
  }

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
              path={getLatLngPolyline({ origin: ansPosObj, destination: pin })}
            />
            {setDistance(haversineDistance(pin, ansPosObj))}
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
