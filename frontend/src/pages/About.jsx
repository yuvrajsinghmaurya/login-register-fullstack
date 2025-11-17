import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-indigo-600 py-16 px-6 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          We are a passionate team dedicated to building high-quality web
          applications that deliver great user experiences and powerful backend
          functionality.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is to create scalable and seamless digital products that
            empower businesses and elevate user interaction. With a strong focus
            on clean architecture, modern UI, and optimized server performance, we
            bring your ideas to life with precision and creativity.
          </p>

          <h2 className="text-3xl font-semibold mb-4 text-gray-800">What We Do</h2>
          <p className="text-gray-600 leading-relaxed">
            We specialize in full-stack development, including React, Node.js,
            MongoDB, Express, API development, authentication systems, UI design,
            and deployment. We believe in writing clean, reusable, and scalable
            code for real-world applications.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=60"
            alt="About us"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-center text-3xl font-bold mb-10 text-gray-800">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="p-6 bg-gray-100 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-3">Quality</h3>
            <p className="text-gray-600">
              We focus on delivering high-quality code and pixel-perfect UI that
              enhances user experience.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-3">Creativity</h3>
            <p className="text-gray-600">
              We bring creativity and innovation to solve real-world problems
              through smart design and development.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-3">Performance</h3>
            <p className="text-gray-600">
              We build fast, scalable applications optimized for speed and
              reliability.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
