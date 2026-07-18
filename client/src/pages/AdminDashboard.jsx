import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <button onClick={() => navigate("/admin/products")}>
        Manage Products
      </button>

      <br />
      <br />

      <button onClick={() => navigate("/admin/orders")}>
        Manage Orders
      </button>

      <br />
      <br />

      <button onClick={() => navigate("/admin/users")}>
        Manage Users
      </button>
    </div>
  );
};

export default AdminDashboard;