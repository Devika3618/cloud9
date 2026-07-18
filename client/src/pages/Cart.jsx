import { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "20px",
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              width="100"
            />

            <div>
              <h3>{item.name}</h3>
              <h2>₹{item.price}</h2>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;