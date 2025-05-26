import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "./locationStyles.css";
import { Icon } from 'leaflet';
import mapMarker from '../../../assets/map-marker-line.svg';
import phoneIcon from '../../../assets/phone.svg';
import emailIcon from '../../../assets/email.svg';

const Location = () => {
  // Координати центру Львова
  const position = [49.8397, 24.0297];
  const markerPosition = [49.837580, 24.026716];

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38]
  });

  return (
    <section className="location-section">
      <div className="location-content">
        <h2>Наше розташування</h2>
        <p className="location-description">
          Ми знаходимося в самому серці Львова, що робить нас легкодоступними для всіх, 
          хто потребує наших послуг. Завітайте до нас, щоб отримати професійну консультацію 
          та підтримку.
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <img src={mapMarker} alt="location" />
            <span>вул. Степана Бандери, 12, Львів</span>
          </div>
          <div className="contact-item">
            <img src={phoneIcon} alt="phone" />
            <span>+380 (32) 258-21-11</span>
          </div>
          <div className="contact-item">
            <img src={emailIcon} alt="email" />
            <span>info@prosthetics.com</span>
          </div>
        </div>
      </div>
      
      <div className="map-container">
        <MapContainer 
          center={position} 
          zoom={13} 
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%", borderRadius: "24px", border: "1.5px solid #73A965" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={markerPosition} icon={customIcon}>
            <Popup>
              вул. Степана Бандери, 12, Львів
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Location; 