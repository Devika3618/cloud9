import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import ManageUsers from "./pages/ManageUsers";
import ManageProducts from "./pages/ManageProducts";
import ManageOrders from "./pages/ManageOrders";

import "./App.css";

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>

      <div className="app">

        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <div className="main">

          <Navbar
            setSidebarOpen={setSidebarOpen}
          />

          <div className="content">

            <Routes>

              <Route path="/" element={<Dashboard />} />

              <Route path="/users" element={<ManageUsers />} />

              <Route path="/products" element={<ManageProducts />} />

              <Route path="/orders" element={<ManageOrders />} />

            </Routes>

          </div>

        </div>

      </div>

    </Router>
  );
}

export default App;