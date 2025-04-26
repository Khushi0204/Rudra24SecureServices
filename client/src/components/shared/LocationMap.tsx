import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for marker icons in Leaflet with React
// This is needed because Leaflet's default icon assets are not properly loaded when bundled
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  shadowAnchor: [12, 41],
  popupAnchor: [0, -41] // point from which the popup should open relative to the iconAnchor
});

L.Marker.prototype.options.icon = defaultIcon;

interface ServiceLocation {
  id: number;
  name: string;
  address: string;
  coordinates: [number, number]; // [latitude, longitude]
}

interface LocationMapProps {
  locations: ServiceLocation[];
  zoom?: number;
  height?: string;
}

export default function LocationMap({ 
  locations, 
  zoom = 10, 
  height = "400px" 
}: LocationMapProps) {
  // Define the center as the average of all location coordinates
  const center = locations.length > 0 
    ? [
        locations.reduce((sum, loc) => sum + loc.coordinates[0], 0) / locations.length,
        locations.reduce((sum, loc) => sum + loc.coordinates[1], 0) / locations.length
      ] as [number, number]
    : [12.9716, 77.5946] as [number, number]; // Default to Bangalore if no locations

  // Fix for SSR
  useEffect(() => {
    // This is needed because leaflet tries to access window/document at import time
    // which breaks SSR
  }, []);

  return (
    <div className="rounded-lg overflow-hidden shadow-lg border" style={{ height }}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location) => (
          <Marker 
            key={location.id} 
            position={location.coordinates} 
          >
            <Popup>
              <div>
                <h3 className="font-bold">{location.name}</h3>
                <p className="text-sm mt-1">{location.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}