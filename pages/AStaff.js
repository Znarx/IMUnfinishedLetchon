import React, { useState } from "react";
import Link from "next/link";

export default function AStaff() {
  const [staff, setStaff] = useState([
    { id: "1001", name: "Askia Bernales", position: "Chef", contact: "09475881144" },
    { id: "1002", name: "Francis Resurreccion", position: "Delivery Rider", contact: "09518577641" }
  ]);

  const [newStaff, setNewStaff] = useState({ id: "", name: "", position: "", contact: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStaff((prevStaff) => ({
      ...prevStaff,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    setStaff([...staff, newStaff]);
    setNewStaff({ id: "", name: "", position: "", contact: "" });
  };

  const handleUpdate = () => {
    const updatedStaff = staff.map((member) =>
      member.id === newStaff.id ? newStaff : member
    );
    setStaff(updatedStaff);
  };

  const handleDelete = (id) => {
    const filteredStaff = staff.filter((member) => member.id !== id);
    setStaff(filteredStaff);
  };

  return (
    <div className="flex h-screen">
      <aside className="bg-gray-800 w-1/4 text-white p-4">
        <div className="flex flex-col items-center">
          <img src="/admin.png" alt="Admin" className="rounded-full w-16 h-16" />
          <h2 className="mt-2">Admin</h2>
        </div>
        <nav className="mt-4">
          <Link href="/AProduct"><button className="w-full text-left p-2">Products</button></Link>
          <Link href="/AStaff"><button className="w-full text-left p-2 bg-red-700 mb-2">Staff</button></Link>
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
        <h1 className="text-2xl font-bold mb-4">Staff</h1>
        <table className="w-full bg-white mb-4">
          <thead>
            <tr className="bg-red-700 text-white">
              <th className="p-2">StaffID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Position</th>
              <th className="p-2">Contact Details</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((member) => (
              <tr key={member.id}>
                <td className="p-2 border">{member.id}</td>
                <td className="p-2 border">{member.name}</td>
                <td className="p-2 border">{member.position}</td>
                <td className="p-2 border">{member.contact}</td>
                <td className="p-2 border">
                  <button className="bg-blue-500 text-white p-1 mr-2" onClick={() => setNewStaff(member)}>Update</button>
                  <button className="bg-red-500 text-white p-1" onClick={() => handleDelete(member.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="text-xl font-bold mb-4">Manage Staff</h2>
        <form className="bg-white p-4 rounded-lg shadow-md space-y-4">
          <input
            type="text"
            name="id"
            value={newStaff.id}
            onChange={handleInputChange}
            placeholder="StaffID"
            className="w-full p-2 border"
          />
          <input
            type="text"
            name="name"
            value={newStaff.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full p-2 border"
          />
          <input
            type="text"
            name="position"
            value={newStaff.position}
            onChange={handleInputChange}
            placeholder="Position"
            className="w-full p-2 border"
          />
          <input
            type="text"
            name="contact"
            value={newStaff.contact}
            onChange={handleInputChange}
            placeholder="Contact Details"
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
