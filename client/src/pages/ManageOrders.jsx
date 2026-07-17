import { useState } from "react";

const ManageOrders = () => {
  const [orders,setOrders]=useState([]);

useEffect(()=>{

fetchOrders();

},[]);

const fetchOrders=async()=>{

const res=await API.get("/orders");

setOrders(res.data);

};
const updateStatus=async(id,status)=>{

await API.put(`/orders/${id}/status`,{

status

});

fetchOrders();

};

  return (
    <div>
      <h1>Manage Orders</h1>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Update Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.amount}</td>
              <td>{order.status}</td>
              <td>
                <select
                  value={order.status}
                  onChange={(e) =>
                    updateStatus(order.id, e.target.value)
                  }
                >
                  <option>Pending</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                  <option>Cancelled</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;