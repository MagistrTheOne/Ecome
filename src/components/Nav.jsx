import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories' },
    { name: 'Men’s', path: '/mens' },
    { name: 'Women’s', path: '/womens' },
    { name: 'Jewelry', path: '/jewelry' },
    { name: 'Perfume', path: '/perfume' },
    { name: 'Blog', path: '/blog' },
    { name: 'Trending', path: '/trending' },
  ];

  return (
    <nav className="nav">
      <div className="nav-content">
        {navItems.map((item, index) => (
          <Link key={index} to={item.path} className="nav-item">
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;