import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Nav from './components/Nav';
import Banner from './components/Banner';
import CategoryNav from './components/CategoryNav';
import ProductSection from './components/ProductSection';
import Card from './components/Card';
import Categories from './components/Categories';
import Mens from './components/Mens';
import Womens from './components/Womens';
import Jewelry from './components/Jewelry';
import Perfume from './components/Perfume';
import Blog from './components/Blog';
import Trending from './components/Trending';
import './index.css';

const PRODUCTS = [
  { id: 1, name: 'Xiaomi 12T Pro', price: 100, image: '/src/assets/images/xiaomi.png' },
  { id: 2, name: 'Mackbook', price: 1200, image: '/src/assets/images/mackbook.png' },
  { id: 3, name: 'Samsung Galaxy', price: 800, image: '/src/assets/images/samsung.png' },
];

// Home component to render the main page
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <CategoryNav />
      <ProductSection title="Новинки" products={PRODUCTS} />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Topbar />
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/perfume" element={<Perfume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;