import { useState, useEffect } from "react";
import API from "../../api/api";
const ManageUsers = () => {
 const [users, setUsers] = useState([]);

useEffect(() => {
    fetchUsers();
}, []);

const fetchUsers = async () => {
    try {
        const res = await API.get("/admin/users");
        setUsers(res.data);
    } catch (err) {
        console.log(err);
    }
};

  const deleteUser = async(id)=>{

try{

await API.delete(`/admin/users/${id}`);

fetchUsers();

}catch(err){

console.log(err);

}

}
  return (
    <div>
      <h1>Manage Users</h1>

      <input
        type="text"
        placeholder="Search User..."
        className="search-box"
      />

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;