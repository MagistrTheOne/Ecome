import React from 'react';

const CategoryNav = () => {
  const categories = ['Dress', 'Winter Coat', 'Glasses & Lens', 'Shorts & Jeans'];

  return (
    <div className="category-nav">
      {categories.map((category, index) => (
        <div key={index} className="category-card">
          <p>{category}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryNav;