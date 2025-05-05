import React from 'react';
import Card from './Card';

const ProductSection = ({ title, products }) => {
  return (
    <div className="product-section">
      <h2 className="section-title">{title}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <Card key={product.id} name={product.name} price={product.price} image={product.image} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;