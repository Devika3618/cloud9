import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Cloud9</h1>

          <h2>Shop Smarter. Live Better.</h2>

          <p>
            Discover premium electronics, fashion, accessories and more at
            unbeatable prices.
          </p>

          <div className="hero-buttons">
            <Link to="/products">
              <button className="shop-btn">Shop Now</button>
            </Link>

            <Link to="/register">
              <button className="register-btn">Register</button>
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700"
            alt="Shopping"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Shop By Category</h2>

        <div className="category-grid">

          <div className="category-card">
            💻
            <h3>Electronics</h3>
          </div>

          <div className="category-card">
            👕
            <h3>Fashion</h3>
          </div>

          <div className="category-card">
            ⌚
            <h3>Watches</h3>
          </div>

          <div className="category-card">
            🎧
            <h3>Accessories</h3>
          </div>

        </div>
      </section>

      {/* Features */}

      <section className="features">

        <h2>Why Choose Cloud9?</h2>

        <div className="feature-grid">

          <div className="feature-box">
            🚚
            <h3>Fast Delivery</h3>
            <p>Delivery across India.</p>
          </div>

          <div className="feature-box">
            🔒
            <h3>Secure Payment</h3>
            <p>100% Secure Transactions.</p>
          </div>

          <div className="feature-box">
            ⭐
            <h3>Top Quality</h3>
            <p>Premium Products.</p>
          </div>

          <div className="feature-box">
            🔄
            <h3>Easy Returns</h3>
            <p>7-Day Return Policy.</p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;