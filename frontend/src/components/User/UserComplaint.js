import UserHeader from "./userHeader";
import React, { useState } from "react";

const UserComplaint = () => {
  const [complaints, setComplaints] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    description: "",
    image: null,
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle image upload
  const handleImageUpload = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Function to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();

    const newComplaint = {
      id: complaints.length + 1,
      date: new Date().toLocaleDateString(),
      category: formData.category,
      description: formData.description,
      status: "Pending",
    };

    setComplaints([...complaints, newComplaint]);
    setFormData({ category: "", description: "", image: null });
    setFormVisible(false);
  };

  return (
    <div className="bg-green-50 h-screen">
      <UserHeader />
      <div className="container mx-auto p-4 w-9/12">
        <h1 className="text-2xl font-bold mb-4 text-green-800 text-center">
          Village Complaint Management
        </h1>
        <button
          onClick={() => setFormVisible(!formVisible)}
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600 mb-4"
        >
          Raise Complaint
        </button>

        {formVisible && (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 p-4 rounded shadow-lg mb-4"
          >
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Complaint Category:
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select Category</option>
                <option value="Water">Water</option>
                <option value="Electricity">Electricity</option>
                <option value="Hospital">Hospital</option>
                <option value="Pension">Pension</option>
                <option value="Pension">Ration</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Upload Image (optional):
              </label>
              <input
                type="file"
                onChange={handleImageUpload}
                className="w-full p-2 border rounded"
              />
            </div>

            <button
              type="submit"
              className="bg-green-700   text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Submit Complaint
            </button>
          </form>
        )}

        <h2 className="text-xl font-semibold mb-2">Complaint History</h2>
        <table className="min-w-full bg-white border rounded shadow-lg">
          <thead>
            <tr className="w-full bg-green-600 text-white">
              <th className="py-2 px-4">Complaint ID</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Category</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 text-center">{complaint.id}</td>
                <td className="py-2 px-4 text-center">{complaint.date}</td>
                <td className="py-2 px-4 text-center">{complaint.category}</td>
                <td className="py-2 px-4 text-center text-yellow-600">
                  {complaint.status}
                </td>
              </tr>
            ))}
            {complaints.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No complaints submitted yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default UserComplaint;
