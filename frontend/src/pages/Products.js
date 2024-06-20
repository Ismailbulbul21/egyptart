import React from 'react';
import { Link } from 'react-router-dom';
import chairImage from '../images/360_F_571912904_2FymjuUT1mlvDmKjPfQV2AYxLuYFMxgO-removebg-preview.png';
import tableImage from '../images/bed.jpg';
import sofaImage from '../images/casual-life-3d-girl-with-tablet-and-working-process-on-desktop.png';
import bedImage from '../images/update.png';
import deskImage from '../images/updteee.png';

const products = [
  { id: 1, name: 'Elegant Chair', price: '$150', image: chairImage },
  { id: 2, name: 'Modern Table', price: '$250', image: tableImage },
  { id: 3, name: 'Luxury Sofa', price: '$450', image: sofaImage },
  { id: 4, name: 'Classic Bed', price: '$550', image: bedImage },
  { id: 5, name: 'Stylish Desk', price: '$300', image: deskImage },
];

const Products = () => {
  return (
    <div className=" bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg  overflow-hidden">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-lg mb-4">{product.price}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block hover:bg-blue-600 transition duration-300"
                >
                  View Details
                </Link>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
