import { useAppSelector } from "../../../store/hooks/hooks";

import profile from "../../../Assets/profile-img-small.png";

function SidebarTop() {
  const show = useAppSelector((state) => state.locations.showLocation.show);

  return (
    <>
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
    </>
  );
}

export default SidebarTop;
