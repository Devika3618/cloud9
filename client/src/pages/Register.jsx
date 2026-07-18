const Register = () => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Register</h1>

      <br />

      <input
        type="text"
        placeholder="Enter Name"
        style={{ padding: "10px", width: "250px" }}
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Enter Email"
        style={{ padding: "10px", width: "250px" }}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
        style={{ padding: "10px", width: "250px" }}
      />

      <br />
      <br />

      <button
        style={{
          padding: "10px 20px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Register
      </button>
    </div>
  );
};

export default Register;