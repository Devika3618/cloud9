import { useEffect, useState } from "react";
import API from "../../api/api";
import DashboardCard from "../components/DashboardCard";
const Dashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    products: 0,
    orders: 0,
    revenue: 0,
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await API.get("/admin/dashboard");
        setStats(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <>
      <h1>Dashboard</h1>

      <div className="dashboard-grid">
        <DashboardCard title="Users" value={stats.users} />
        <DashboardCard title="Products" value={stats.products} />
        <DashboardCard title="Orders" value={stats.orders} />
        <DashboardCard title="Revenue" value={`₹${stats.revenue}`} />
      </div>
    </>
  );
};

export default Dashboard;