import heart from "../../../Assets/heart-img.png";
import map_icon from "../../../Assets/map-icon.png";
import { cardClickHandler } from "../../../helper-functions/helper-functions";
import { useAppSelector } from "../../../store/hooks/hooks";

function PropertyListItems() {
  const filteredLocations = useAppSelector((state) => state.locations.filteredLocations);

  const { id, show } = useAppSelector((state) => state.locations.showLocation);

  return (
    <>
      {filteredLocations.map((location) => {
        return (
          <div
            className="prop-card-container-center"
            key={location.id}
          >
            <div
              className={`props-card-container ${
                id === location.id && show ? "box-shadow" : "remove-box-shadow"
              }`}
              onClick={() => cardClickHandler(location.id)}
            >
              <div className="props-card-img-bg">
                <img
                  src={location.image}
                  alt="property"
                />
              </div>
              <div className="props-card-btm-outline">
                <div className="props-card-head-evenly-spaced">
                  <div className="props-card-modern">Modern House</div>
                  <div className="props-card-like">
                    <img
                      src={heart}
                      alt="like button"
                    />
                  </div>
                </div>
                <div className="props-card-btm-location">
                  <div className="props-card-mapIcon">
                    <img
                      src={map_icon}
                      alt="map icon"
                    />
                  </div>
                  <div className="props-card-city">{location.city}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PropertyListItems;
