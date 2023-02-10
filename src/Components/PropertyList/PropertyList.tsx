import "./PropertyList.css";

import PropertyListItems from "./PropertyListItems/PropertyListItems";

import { useAppSelector } from "../../store/hooks/hooks";

import MapWindow from "../Map/Map";
import PropertyTop from "./PropertyTop/PropertyTop";

function PropertyList() {
  const show = useAppSelector((state) => state.locations.showLocation.show);

  return (
    <>
      <PropertyTop />
      <div className={`property-map-window-container`}>
        <div
          className={`property-list-grid ${
            show ? "property-list-grid-onMap" : null
          }`}
        >
          <PropertyListItems />
        </div>
        {show ? <MapWindow /> : null}
      </div>
    </>
  );
}

export default PropertyList;
