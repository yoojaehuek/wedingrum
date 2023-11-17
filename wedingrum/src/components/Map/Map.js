import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../Map/Map.scss'; 

const MapComponent = () => {
  const position = [36.6384, 127.6966];

  return (
    <div className="map-container"> {/* 추가된 부분 */}
      <MapContainer center={position} zoom={13} className="MapContainer">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
          한국의 중심 위치입니다. <br /> 수정 가능합니다.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
