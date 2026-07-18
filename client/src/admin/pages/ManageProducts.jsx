import { useState, useEffect } from "react";
import API from "../../api/api";
const ManageProducts = () => {
  const [products,setProducts]=useState([]);

useEffect(()=>{

fetchProducts();

},[]);

const fetchProducts = async () => {
  try {
    const res = await API.get("/products");
    setProducts(res.data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

  const deleteProduct = async (id) => {
  if (window.confirm("Delete this product?")) {
    try {
      await API.delete(`/products/${id}`);

      fetchProducts(); 
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }
};

  return (
    <div>
      <h1>Manage Products</h1>

      <button className="add-btn">+ Add Product</button>

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>₹{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button className="edit-btn">Edit</button>

                <button
                  className="delete-btn"
                  onClick={() => deleteProduct(product._id)}
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

export default ManageProducts;