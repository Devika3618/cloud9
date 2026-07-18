import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#1f2937",
        color: "white",
        padding: "15px 40px",
      }}
    >
      <h2>Cloud9</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          Home
        </Link>

        <Link style={{ color: "white", textDecoration: "none" }} to="/products">
          Products
        </Link>

        <Link style={{ color: "white", textDecoration: "none" }} to="/about">
          About
        </Link>

        <Link style={{ color: "white", textDecoration: "none" }} to="/contact">
          Contact
        </Link>

        <Link style={{ color: "white", textDecoration: "none" }} to="/login">
          Login
        </Link>

        <Link
          style={{
            background: "#6366f1",
            padding: "8px 15px",
            borderRadius: "6px",
            color: "white",
            textDecoration: "none",
          }}
          to="/register"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;