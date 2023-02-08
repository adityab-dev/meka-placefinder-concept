import { useAppSelector } from "../../../store/hooks/hooks";
import { useMap } from "react-leaflet";

import provider_config from "../../../OSM-provider/OSM-proviser";

function MapPropComponent() {
  const { lat, lng } = useAppSelector((state) => state.locations.showLocation);
  const map = useMap();

  const { ZOOM_LEVEL } = provider_config;

  map.setView([lat, lng], ZOOM_LEVEL);

  return null;
}

export default MapPropComponent;
