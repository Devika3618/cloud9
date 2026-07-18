import { FaBars } from "react-icons/fa";

const Navbar = ({ setSidebarOpen }) => {
  return (
    <div className="navbar">
      <button
        className="menu-btn"
        onClick={() => setSidebarOpen(true)}
      >
        <FaBars />
      </button>

      <h2>Admin Dashboard</h2>

      <div className="admin-info">
        Welcome, Admin
      </div>
    </div>
  );
};

export default Navbar;