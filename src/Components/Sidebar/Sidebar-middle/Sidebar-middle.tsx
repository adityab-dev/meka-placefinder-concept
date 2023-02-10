import { useAppSelector } from "../../../store/hooks/hooks";

import { sidebarLabels } from "../../../constants/sidebar-links";

import buy from "../../../Assets/buy-img.png";
import sell from "../../../Assets/sell-img.png";
import rent from "../../../Assets/rent-img.png";
import settings from "../../../Assets/settings-img.png";

const images = [buy, sell, rent, buy, settings];

function SidebarMiddle() {
  const show = useAppSelector((state) => state.locations.showLocation.show);

  return (
    <section
      className={`sidebar-middle-section ${show ? "margin-remove" : null}`}
    >
      <div className={`sidebar-items ${show ? "justify-center" : null}`}>
        Menu
      </div>

      {sidebarLabels.map((label, index) => {
        return (
          <div className={`sidebar-items ${show ? "justify-center" : null}`}>
            <img
              src={images[index]}
              alt={`${label}-icon`}
              id={label}
              className="sidebar-small-imgs"
            />
            <label
              htmlFor={buy}
              className={`sidebar-items-margin-right ${
                show ? "display-none" : null
              }`}
            >
              {label}
            </label>
          </div>
        );
      })}
    </section>
  );
}

export default SidebarMiddle;
