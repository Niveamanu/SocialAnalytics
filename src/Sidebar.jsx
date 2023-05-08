import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import { data } from "./data";
import Sidebarmenu from "./Sidebarmenu";

const Sidebar = ({ streamContent }) => {
  const { isSidebarOpen, closeSidebar, currentItem } = useGlobalContext();
  var uniqueStream = [];

  {
    data.map((item) => {
      for (let i = 0; i < item.stream.length; i++) {
        if (uniqueStream.indexOf(item.stream[i]) === -1) {
          if (![item.stream[i]].toString().includes(","))
            uniqueStream.push(item.stream[i]);
        }
      }
    });
  }
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidenavbar">
        <h3 className="logo">Social Analytics</h3>
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>

      <div className="sidebar-links">
        <Sidebarmenu />
      </div>
    </aside>
  );
};
export default Sidebar;
