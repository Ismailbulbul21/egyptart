import React from 'react';
import { useParams } from 'react-router-dom';
import chairImage from '../images/360_F_571912904_2FymjuUT1mlvDmKjPfQV2AYxLuYFMxgO-removebg-preview.png';
import tableImage from '../images/bed.jpg';
import sofaImage from '../images/casual-life-3d-girl-with-tablet-and-working-process-on-desktop.png';
import bedImage from '../images/update.png';
import deskImage from '../images/updteee.png';

const products = [
  { id: 1, name: 'Elegant Chair', price: '$150', description: 'A comfortable and elegant chair.', image: chairImage },
  { id: 2, name: 'Modern Table', price: '$250', description: 'A modern table for your dining room.', image: tableImage },
  { id: 3, name: 'Luxury Sofa', price: '$450', description: 'A luxurious sofa for your living room.', image: sofaImage },
  { id: 4, name: 'Classic Bed', price: '$550', description: 'A classic bed for a restful night.', image: bedImage },
  { id: 5, name: 'Stylish Desk', price: '$300', description: 'A stylish desk for your office.', image: deskImage },
];

const Product = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img src={product.image} alt={product.name} className="w-full h-80 md:h-96 object-cover rounded" />
        <div className="text-left">
          <h2 className="text-4xl font-bold mb-2">{product.name}</h2>
          <p className="text-lg font-semibold mb-4">{product.price}</p>
          <p className="text-md">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
