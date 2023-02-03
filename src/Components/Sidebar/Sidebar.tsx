import profile from "../../Assets/profile-img-small.png";
import buy from "../../Assets/buy-img.png";
import sell from "../../Assets/sell-img.png";
import rent from "../../Assets/rent-img.png";
import settings from "../../Assets/settings-img.png";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-contaner-width-height">
      <div className="sidebar-profile-empty-div default-grey-bg flex">
        <img
          src={profile}
          alt="profile"
        />
      </div>

      <input
        type="text"
        placeholder="Search"
        className="sidebar-search"
      />

      <section className="sidebar-middle-section">
        <div className="sidebar-items">Menu</div>

        <div className="sidebar-items">
          <img
            src={buy}
            alt="buy-icon"
            id="buy"
            className="sidebar-small-imgs"
          />
          <label
            htmlFor="buy"
            className="sidebar-items-margin-right"
            style={{ color: "green" }}
          >
            Buy
          </label>
        </div>

        <div className="sidebar-items">
          <img
            id="sell"
            src={sell}
            alt="sell-icon"
            className="sidebar-small-imgs"
          />
          <label
            htmlFor="sell"
            className="sidebar-items-margin-right"
          >
            Sell
          </label>
        </div>

        <div className="sidebar-items">
          <img
            id="rent"
            src={rent}
            alt="rent-icon"
            className="sidebar-small-imgs"
          />
          <label
            htmlFor="rent"
            className="sidebar-items-margin-right"
          >
            Rent
          </label>
        </div>

        <div className="sidebar-items">
          <img
            id="compare"
            src={buy}
            alt="compare-icon"
            className="sidebar-small-imgs"
          />
          <label
            htmlFor="compare"
            className="sidebar-items-margin-right"
          >
            Compare
          </label>
        </div>

        <div className="sidebar-items">
          <img
            id="settings"
            src={settings}
            alt="setting-icon"
            className="sidebar-small-imgs"
          />
          <label
            htmlFor="settings"
            className="sidebar-items-margin-right"
          >
            Settings
          </label>
        </div>
      </section>

      <button
        type="button"
        className="sidebar-logout-btn"
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
