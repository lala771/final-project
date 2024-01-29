// Product.js
import React from 'react';

const Product = () => {
  return (
    <div className="about-page">
    <header className="header">
  
      <img
        className="header-image"
        src="https://images.pexels.com/photos/724635/pexels-photo-724635.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="About Us"
      />
    </header>

    <div className="about-content">
      <h2>La SCENTO FRAGRENCE</h2>
      <p>	La SCENTO Fragrance is a passionate perfume home that offers the widest range of Arabian and French (Eastern & Western) perfume brands.
It is created for customers to wear in confidence. We Strive to, and excel in maintaining our long lasting relations with our customers and also welcome the new and eager ones by giving them the best possible service, finding the perfect fragrances and satisfying them completely, without emptying out their pockets! This keeps them with a new-moon smile all the time. We believe that there’s much more to choosing a perfume then just the smell.

      </p>

      {/* Add more content as needed */}
    </div>
  </div>
  );
};

export default Product;
