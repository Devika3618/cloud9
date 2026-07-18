import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">Cloud9</Link>
      </div>

      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="nav-right">
        <input
          type="text"
          placeholder="Search..."
          className="search-box"
        />

        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/register" className="register-btn">
          Register
        </Link>

        <Link to="/cart" className="cart-btn">
          Cart (0)
        </Link>
      </div>
    </header>
  );
};

export default Navbar;