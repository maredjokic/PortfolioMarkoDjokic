import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const serbiaCenter: LatLngExpression = [44.0165, 21.0059];
const pozarevacPosition: LatLngExpression = [44.62117, 21.18454];
const zoom = 5;

const Map: React.FC = () => {
    const customIcon = new L.Icon({
        iconUrl: 'https://img.icons8.com/ios/50/000000/marker.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

  return (
    <MapContainer className='fade-in-reveal' center={serbiaCenter} zoom={zoom} style={{ height: "120px", width: "250px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      <Marker position={pozarevacPosition} icon={customIcon}>
        <Popup>
          Požarevac
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;