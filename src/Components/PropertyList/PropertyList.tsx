import "./PropertyList.css";

import bell from "../../Assets/bell.png";
import profile_img_small from "../../Assets/profile-img-small.png";
import PropertyListItems from "./PropertyListItems/PropertyListItems";

import { useAppSelector } from "../../store/hooks/hooks";

import MapWindow from "../Map/Map";

function PropertyList() {
  const totalResults = useAppSelector((state) => state.locations.totalResults);
  const show = useAppSelector((state) => state.locations.showLocation.show);
  return (
    <div>
      <div className="prop-empty-div">
        <div className="props-imgs-top-container">
          <div className="props-imgs-top">
            <img
              src={bell}
              alt="bell"
            />
          </div>
          <div
            className="props-imgs-top"
            style={{ background: "lightgray" }}
          >
            <img
              src={profile_img_small}
              alt="profile"
            />
          </div>
        </div>
      </div>
      <div className="props-text">
        <div className="prop-398">{totalResults} Results</div>
        <div className="prop-scot">in Scotland</div>
      </div>
      <div className={`property-map-window-container`}>
        <div className={`property-list-grid ${show ? "property-list-grid-onMap" : null}`}>
          <PropertyListItems />
        </div>
        {show ? <MapWindow /> : null}
      </div>
    </div>
  );
}

export default PropertyList;
