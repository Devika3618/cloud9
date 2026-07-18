import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className={`sidebar ${sidebarOpen ? "show" : ""}`}>
      <div className="sidebar-header">
        <h2 className="logo">Cloud9 Admin</h2>

        <button
          className="close-btn"
          onClick={() => setSidebarOpen(false)}
        >
          <FaTimes />
        </button>
      </div>

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "menu active" : "menu"
          }
          onClick={() => setSidebarOpen(false)}
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "menu active" : "menu"
          }
          onClick={() => setSidebarOpen(false)}
        >
          <FaUsers />
          <span>Manage Users</span>
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "menu active" : "menu"
          }
          onClick={() => setSidebarOpen(false)}
        >
          <FaBoxOpen />
          <span>Manage Products</span>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            isActive ? "menu active" : "menu"
          }
          onClick={() => setSidebarOpen(false)}
        >
          <FaShoppingCart />
          <span>Manage Orders</span>
        </NavLink>
      </nav>

      <button className="logout-btn">
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;