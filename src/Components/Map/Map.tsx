import { MapContainer, TileLayer, Marker } from "react-leaflet";

import L from "leaflet";

import location from "../../Assets/location_svg.svg";

import provider_config from "../../OSM-provider/OSM-proviser";

import "leaflet/dist/leaflet.css";

import { useAppSelector } from "../../store/hooks/hooks";

import MapPropComponent from "./MapPropComponent/MapPropComponent";

function MapWindow() {
  const { lat, lng } = useAppSelector((state) => state.locations.showLocation);

  const { url, attribution } = provider_config;

  const icon = L.icon({ iconUrl: location, iconSize: [35, 55] });

  return (
    <div className="map-window-map">
      <MapContainer
        center={[lat, lng]}
        scrollWheelZoom={false}
      >
        <TileLayer
          url={url}
          attribution={attribution}
        />
        <MapPropComponent />
        <Marker
          position={[lat, lng]}
          icon={icon}
        ></Marker>
      </MapContainer>
    </div>
  );
}

export default MapWindow;
