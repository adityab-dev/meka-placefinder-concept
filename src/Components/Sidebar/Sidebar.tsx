import profile from "../../Assets/profile-img-small.png";
import buy from "../../Assets/buy-img.png";
import sell from "../../Assets/sell-img.png";
import rent from "../../Assets/rent-img.png";
import settings from "../../Assets/settings-img.png";
import logout_logo from "../../Assets/logout-icon.png";

import "./Sidebar.css";
import { useAppSelector } from "../../store/hooks/hooks";

function Sidebar() {
  const show = useAppSelector((state) => state.locations.showLocation.show);

  return (
    <div className="sidebar-contaner-width-height">
      <div
        className={`sidebar-profile-empty-div default-grey-bg flex ${
          show ? "sidebar-profile-empty-div-small" : null
        }`}
      >
        <img
          src={profile}
          alt="profile"
        />
      </div>

      <input
        type="text"
        placeholder="Search"
        className={`sidebar-search ${show ? "display-none" : null}`}
      />

      <section className={`sidebar-middle-section ${show ? "margin-remove" : null}`}>
        <div className={`sidebar-items ${show ? "justify-center" : null}`}>Menu</div>

        <div className={`sidebar-items ${show ? "justify-center" : null}`}>
          <img
            src={buy}
            alt="buy-icon"
            id="buy"
            className="sidebar-small-imgs"
          />
          <label
            htmlFor="buy"
            className={`sidebar-items-margin-right ${show ? "display-none" : null}`}
            style={{ color: "green" }}
          >
            Buy
          </label>
        </div>

        <div className={`sidebar-items ${show ? "justify-center" : null}`}>
          <img
            id="sell"
            src={sell}
            alt="sell-icon"
            className="sidebar-small-imgs"
          />
          <label
            htmlFor="sell"
            className={`sidebar-items-margin-right ${show ? "display-none" : null}`}
          >
            Sell
          </label>
        </div>

        <div className={`sidebar-items ${show ? "justify-center" : null}`}>
          <img
            id="rent"
            src={rent}
            alt="rent-icon"
            className="sidebar-small-imgs"
          />
          <label
            htmlFor="rent"
            className={`sidebar-items-margin-right ${show ? "display-none" : null}`}
          >
            Rent
          </label>
        </div>

        <div className={`sidebar-items ${show ? "justify-center" : null}`}>
          <img
            id="compare"
            src={buy}
            alt="compare-icon"
            className="sidebar-small-imgs"
          />
          <label
            htmlFor="compare"
            className={`sidebar-items-margin-right ${show ? "display-none" : null}`}
          >
            Compare
          </label>
        </div>

        <div className={`sidebar-items ${show ? "justify-center" : null}`}>
          <img
            id="settings"
            src={settings}
            alt="setting-icon"
            className="sidebar-small-imgs"
          />
          <label
            htmlFor="settings"
            className={`sidebar-items-margin-right ${show ? "display-none" : null}`}
          >
            Settings
          </label>
        </div>
      </section>

      <button
        type="button"
        className={`sidebar-logout-btn ${show ? "margin-remove button-small" : null}`}
      >
        <img
          src={logout_logo}
          alt="logout"
          className={`${show ? "display-none" : null}`}
        />
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
