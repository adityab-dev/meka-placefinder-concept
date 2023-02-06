import "./PropertyList.css";

import bell from "../../Assets/bell.png";
import profile_img_small from "../../Assets/profile-img-small.png";
import PropertyListItems from "./PropertyListItems/PropertyListItems";

function PropertyList() {
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
        <div className="prop-398">398 Results</div>
        <div className="prop-scot">in Scotland</div>
      </div>
      <div className="property-list-grid">
        <PropertyListItems />
      </div>
    </div>
  );
}

export default PropertyList;
