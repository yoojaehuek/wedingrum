import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../Map/Map.scss'; 
import L from 'leaflet';

const MapComponent = ({props}) => {
  // console.log('tes',props.position);

  const [position, setPosition] = useState(props.position);
  
  useEffect(()=>{
    setPosition(props.position);
  }, [props.position]);
  
  //객체로 넘겨줘서 {position: [37.5115, 127.0821], markerPopup: "잠실입니다"} 이런식으로 사용하기 
  // const position = props?props.position: [37.5115, 127.0821];
  // const [position, setPosition] = useState(props?props.position: [37.5115, 127.0821]);

  const customIcon = new L.Icon({
    iconUrl: '/img/map/marker-default.png',
    iconSize: [22, 33],
    iconAnchor: [11, 33],
    popupAnchor: [0, -32],
  });

  return (
    <div className="map-container"> {/* 추가된 부분 */}
      <MapContainer center={position} zoom={130} className="MapContainer" key={position.join(',')}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
          { props?props.popup: "잠실의 위치입니다."}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
