const Cart = () => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Shopping Cart</h1>

      <h3>Smart Phone</h3>

      <p>Price : ₹25,000</p>

      <button
        style={{
          padding: "10px 20px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;