const Checkout = () => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Checkout</h1>

      <p>Total Amount : ₹25,000</p>

      <button
        style={{
          padding: "10px 20px",
          background: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;