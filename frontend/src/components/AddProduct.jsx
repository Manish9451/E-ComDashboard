import { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const addProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return;
    }

    const userId = JSON.parse(localStorage.getItem("user"))._id;

    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log(result);

    if (result) {
      alert("Product added successfully!");
      // Clear form
      setName("");
      setPrice("");
      setCategory("");
      setCompany("");
      setError(false);
    } else {
      alert("Failed to add product.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">Add Product</h1>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Product Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {error && !name && (
          <span className="text-red-500 text-sm">*Product name is required</span>
        )}

        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter Product Price"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {error && !price && (
          <span className="text-red-500 text-sm">*Price is required</span>
        )}

        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter Product Category"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {error && !category && (
          <span className="text-red-500 text-sm">*Category is required</span>
        )}

        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Enter Product Company Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {error && !company && (
          <span className="text-red-500 text-sm">*Company name is required</span>
        )}

        <button
          onClick={addProduct}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
