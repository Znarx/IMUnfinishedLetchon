import React, { useState } from "react";
import Link from "next/link";

export default function AProducts() {
  const [products, setProducts] = useState([
    { id: "1001", name: "Pork Belly", price: "₱ 3000", description: "Lechon Belly" },
    { id: "1002", name: "Baboy", price: "₱ 4500", description: "Lechon Baboy" }
  ]);

  const [newProduct, setNewProduct] = useState({ id: "", name: "", price: "", description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    setProducts([...products, newProduct]);
    setNewProduct({ id: "", name: "", price: "", description: "" });
  };

  const handleUpdate = () => {
    const updatedProducts = products.map((product) =>
      product.id === newProduct.id ? newProduct : product
    );
    setProducts(updatedProducts);
  };

  const handleDelete = (id) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };

  return (
    <div className="flex h-screen">
      <aside className="bg-gray-800 w-1/4 text-white p-4">
        <div className="flex flex-col items-center">
          <img src="/admin.png" alt="Admin" className="rounded-full w-16 h-16" />
          <h2 className="mt-2">Admin</h2>
        </div>
        <nav className="mt-4">
          <Link href="/AProducts"><button className="w-full text-left p-2 bg-red-700 mb-2">Products</button></Link>
          <Link href="/AStaff"><button className="w-full text-left p-2">Staff</button></Link>
          <Link href="/ACustomerInfo"><button className="w-full text-left p-2">Customer's Info</button></Link>
          <Link href="/Inventory"><button className="w-full text-left p-2">Inventory</button></Link>
          <Link href="/Orders"><button className="w-full text-left p-2">Orders</button></Link>
          <Link href="/Delivery"><button className="w-full text-left p-2">Delivery</button></Link>
          <Link href="/Payment"><button className="w-full text-left p-2">Payment</button></Link>
        </nav>
        <div className="mt-auto">
          <button className="w-full text-left p-2">Logout</button>
        </div>
      </aside>
      
      <main className="flex-1 bg-gray-200 p-6">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <table className="w-full bg-white mb-4">
          <thead>
            <tr className="bg-red-700 text-white">
              <th className="p-2">ProductID</th>
              <th className="p-2">ProductName</th>
              <th className="p-2">Price</th>
              <th className="p-2">Description</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="p-2 border">{product.id}</td>
                <td className="p-2 border">{product.name}</td>
                <td className="p-2 border">{product.price}</td>
                <td className="p-2 border">{product.description}</td>
                <td className="p-2 border">
                  <button className="bg-blue-500 text-white p-1 mr-2" onClick={() => setNewProduct(product)}>Update</button>
                  <button className="bg-red-500 text-white p-1" onClick={() => handleDelete(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="text-xl font-bold mb-4">Manage Product</h2>
        <form className="bg-white p-4 rounded-lg shadow-md space-y-4">
          <input
            type="text"
            name="id"
            value={newProduct.id}
            onChange={handleInputChange}
            placeholder="ProductID"
            className="w-full p-2 border"
          />
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            placeholder="ProductName"
            className="w-full p-2 border"
          />
          <input
            type="text"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="w-full p-2 border"
          />
          <input
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="w-full p-2 border"
          />
          <div className="flex justify-end space-x-4">
            <button type="button" onClick={handleUpdate} className="bg-blue-500 text-white p-2 rounded-lg">
              Update
            </button>
            <button type="button" onClick={handleAdd} className="bg-green-500 text-white p-2 rounded-lg">
              Add
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
