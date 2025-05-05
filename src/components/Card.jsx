import React from 'react';

const Card = ({ name, price, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h3 className="card-title">{name}</h3>
      <p className="card-price">${price}</p>
    </div>
  );
};

export default Card;