const ProductDetails = () => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Product Details</h1>

      <img
        src="https://via.placeholder.com/250"
        alt="Product"
      />

      <h2>Smart Phone</h2>

      <h3>₹25,000</h3>

      <p>Latest Android Smartphone with 8GB RAM and 128GB Storage.</p>

      <button
        style={{
          padding: "10px 20px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;