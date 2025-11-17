import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { handleError } from "../utils";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const url = "https://login-register-fullstack-backend.onrender.com/products/";

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      console.log(result);

      setProducts(result); // expecting array of products
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* HERO BANNER */}
      <div className="w-full h-72 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
        <p className="text-lg mt-2">Best deals on your favorite products</p>
      </div>

      {/* PRODUCTS GRID */}
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Products</h2>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-4 hover:shadow-2xl transition duration-300 cursor-pointer"
              >
                {/* PRODUCT IMAGE */}
                <img
                  src={item.image || "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D"}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg"
                />

                {/* NAME */}
                <h3 className="text-lg font-semibold mt-4 text-gray-800">
                  {item.name}
                </h3>

                {/* PRICE */}
                <p className="text-indigo-600 text-xl font-bold mt-2">
                  ₹{item.price}
                </p>

                {/* BUTTON */}
                <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No products found</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
