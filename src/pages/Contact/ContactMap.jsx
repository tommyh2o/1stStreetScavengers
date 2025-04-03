import React from "react";
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const ContactMap = () => {
  // Replace these with the actual latitude and longitude of your location
  const latitude = 40.7128;  // Example: New York City
  const longitude = -74.006; // Example: New York City

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <ReactMapGL
        initialViewState={{
          latitude,
          longitude,
          zoom: 13,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      >
        <Marker longitude={longitude} latitude={latitude} color="red" />
        <Popup longitude={longitude} latitude={latitude} closeButton={false} anchor="top">
          <div>📍 Our Location</div>
        </Popup>
      </ReactMapGL>
    </div>
  );
};

export default ContactMap;
