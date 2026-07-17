const ProductCard = ({ name, price }) => {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src="https://via.placeholder.com/200"
        alt={name}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h3>{name}</h3>

      <h4 style={{ color: "#4f46e5" }}>₹{price}</h4>

      <button
        style={{
          background: "#4f46e5",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;