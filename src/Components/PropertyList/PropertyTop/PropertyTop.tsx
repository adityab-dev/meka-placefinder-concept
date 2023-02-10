import bell from "../../../Assets/bell.png";
import profile_img_small from "../../../Assets/profile-img-small.png";

import { useAppSelector } from "../../../store/hooks/hooks";

function PropertyTop() {
  const totalResults = useAppSelector((state) => state.locations.totalResults);

  return (
    <>
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
    </>
  );
}

export default PropertyTop;
