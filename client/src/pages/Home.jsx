const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          background: "#4f46e5",
          color: "white",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h1>Welcome to Cloud9 Store</h1>
        <p>Discover the latest products at the best prices.</p>
        <button
          style={{
            padding: "10px 20px",
            background: "white",
            color: "#4f46e5",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "15px",
          }}
        >
          Shop Now
        </button>
      </section>

      {/* Featured Products */}
      <section style={{ padding: "40px" }}>
        <h2 style={{ textAlign: "center" }}>Featured Products</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              width: "220px",
              textAlign: "center",
              borderRadius: "10px",
            }}
          >
            <h3>Smart Phone</h3>
            <p>₹25,000</p>
            <button>View</button>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              width: "220px",
              textAlign: "center",
              borderRadius: "10px",
            }}
          >
            <h3>Laptop</h3>
            <p>₹65,000</p>
            <button>View</button>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              width: "220px",
              textAlign: "center",
              borderRadius: "10px",
            }}
          >
            <h3>Headphones</h3>
            <p>₹2,999</p>
            <button>View</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;