import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import chairImage from '../images/360_F_571912904_2FymjuUT1mlvDmKjPfQV2AYxLuYFMxgO-removebg-preview.png';
import tableImage from '../images/bed.jpg';
import sofaImage from '../images/casual-life-3d-girl-with-tablet-and-working-process-on-desktop.png';
import bedImage from '../images/update.png';
import deskImage from '../images/updteee.png';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/contact', formData)
      .then((response) => {
        alert(response.data);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('There was an error saving the contact!', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-6xl font-bold mb-4">Welcome to Egypt Art</h1>
        <p className="text-xl mb-8">Explore our collection of exquisite furniture inspired by Egyptian culture.</p>
        <Link to="/products" className="bg-white text-blue-600 py-2 px-4 rounded-full shadow-lg hover:bg-gray-100 transition">
          Shop Now
        </Link>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={chairImage} alt="Featured Product 1" className="w-full h-64 object-cover"/>
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">Elegant Chair</h3>
              <p className="text-lg">$150</p>
              <Link to="/product/1" className="text-blue-600 hover:underline">View Details</Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={tableImage} alt="Featured Product 2" className="w-full h-64 object-cover"/>
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">Modern Table</h3>
              <p className="text-lg">$250</p>
              <Link to="/product/2" className="text-blue-600 hover:underline">View Details</Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={sofaImage} alt="Featured Product 3" className="w-full h-64 object-cover"/>
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">Luxury Sofa</h3>
              <p className="text-lg">$450</p>
              <Link to="/product/3" className="text-blue-600 hover:underline">View Details</Link>
            </div>
     </div>
          
        </div>
        <Link to='products'><p className='  flex justify-center items-center hover:bg-red-200 duration-700   w-56  h-10 mx-auto text-white rounded-lg  mt-8 bg-gray-900    '>  more  </p></Link>

      </section>

      {/* About Us Snippet */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Egypt Art</h2>
          <p className="text-lg mb-4">
            At Egypt Art, we blend traditional Egyptian craftsmanship with modern design to create unique pieces of furniture that tell a story. Each item in our collection is crafted with meticulous attention to detail and a passion for excellence.
          </p>
          <Link to="/about" className="text-blue-600 hover:underline">Learn More</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src={bedImage} alt="Customer 1" className="w-24 h-24 rounded-full mx-auto mb-4"/>
            <p className="text-lg font-semibold">John Doe</p>
            <p className="text-gray-600">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum ante at vestibulum."</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src={deskImage} alt="Customer 2" className="w-24 h-24 rounded-full mx-auto mb-4"/>
            <p className="text-lg font-semibold">Jane Smith</p>
            <p className="text-gray-600">"Fusce quis feugiat magna. Ut aliquet lacus vitae libero vehicula, at tristique ligula condimentum."</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src={deskImage} alt="Customer 3" className="w-24 h-24 rounded-full mx-auto mb-4"/>
            <p className="text-lg font-semibold">Michael Brown</p>
            <p className="text-gray-600">"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 bg-blue-600  text-center">
        <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
        <p className="text-lg mb-4">Have any questions? Feel free to contact us.</p>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="w-full p-2 mb-4 rounded-md"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="w-full p-2 mb-4 rounded-md"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            placeholder="Your Message"
            name="message"
            className="w-full p-2 mb-4 rounded-md"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="bg-white text-blue-600 py-2 px-4 rounded-md hover:bg-gray-100 transition">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
