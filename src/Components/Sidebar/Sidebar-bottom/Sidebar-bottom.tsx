import { useAppSelector } from "../../../store/hooks/hooks";

import logout_logo from "../../../Assets/logout-icon.png";

function SidebarBottom() {
  const show = useAppSelector((state) => state.locations.showLocation.show);

  return (
    <button
      type="button"
      className={`sidebar-logout-btn ${
        show ? "margin-remove button-small" : null
      }`}
    >
      <img
        src={logout_logo}
        alt="logout"
        className={`${show ? "display-none" : null}`}
      />
      Logout
    </button>
  );
}

export default SidebarBottom;
