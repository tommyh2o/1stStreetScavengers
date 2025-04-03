import React from "react";
import { Map, Marker, Popup } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

const ContactMap = () => {
  const latitude = 30.14910970874549;  // 30.14910970874549
  const longitude = -97.80172575767162; // -97.80172575767162
  
  // Function to open location in user's preferred map app
  const openInMaps = () => {
    // Create URLs for different map services
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    const appleMapsUrl = `maps://maps.apple.com/?q=${latitude},${longitude}`; 
    
    // For mobile devices, try to detect platform and open appropriate maps app
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = appleMapsUrl;
    } else {
      // Default to Google Maps (works on most platforms)
      window.open(googleMapsUrl, '_blank');
    }
  };

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Map
        initialViewState={{
          latitude,
          longitude,
          zoom: 13,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onClick={openInMaps}
        cursor="pointer"
      >
        <Marker 
          longitude={longitude} 
          latitude={latitude} 
          color="red" 
          onClick={openInMaps}
        />
        <Popup 
          longitude={longitude} 
          latitude={latitude} 
          closeButton={false} 
          anchor="top"
          closeOnClick={false}
        >
          <div onClick={openInMaps} style={{ cursor: 'pointer' }}>
            📍 Our Location <span style={{ fontSize: '0.8em', color: '#0066cc' }}>(Click to open in Maps)</span>
          </div>
        </Popup>
      </Map>
      
      {/* Optional: Add a button below the map for better accessibility */}
      <div className="text-center mt-2">
        <button 
          onClick={openInMaps}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Get Directions
        </button>
      </div>
    </div>
  );
};

export default ContactMap;