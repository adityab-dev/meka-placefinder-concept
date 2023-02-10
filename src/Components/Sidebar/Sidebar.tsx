import "./Sidebar.css";

import SidebarMiddle from "./Sidebar-middle/Sidebar-middle";
import SidebarTop from "./Sidebar-top/Sidebar-top";
import SidebarBottom from "./Sidebar-bottom/Sidebar-bottom";

function Sidebar() {
  return (
    <div className="sidebar-contaner-width-height">
      <SidebarTop />
      <SidebarMiddle />
      <SidebarBottom />
    </div>
  );
}

export default Sidebar;
