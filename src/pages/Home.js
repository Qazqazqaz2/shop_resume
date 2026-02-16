import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  const featuredProducts = products.slice(0, 6);
  const softwareCount = products.filter(p => p.category === 'software').length;
  const databaseCount = products.filter(p => p.category === 'database').length;

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Магазин <span className="gradient-text">софта и баз данных</span>
          </h1>
          <p className="hero-description">
            Найди идеальное программное обеспечение и базы данных для своего бизнеса.
            Более {products.length} продуктов от ведущих производителей.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">{softwareCount}</span>
              <span className="stat-label">Программ</span>
            </div>
            <div className="stat">
              <span className="stat-number">{databaseCount}</span>
              <span className="stat-label">Баз данных</span>
            </div>
            <div className="stat">
              <span className="stat-number">{products.length}</span>
              <span className="stat-label">Всего товаров</span>
            </div>
          </div>
          <Link to="/catalog" className="cta-button">
            Смотреть каталог
          </Link>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Популярные товары</h2>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section-footer">
            <Link to="/catalog" className="view-all-link">
              Посмотреть все товары →
            </Link>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Категории</h2>
          <div className="categories-grid">
            <Link to="/catalog?category=software" className="category-card">
              <div className="category-icon">💿</div>
              <h3>Программное обеспечение</h3>
              <p>Профессиональные инструменты для работы и творчества</p>
              <span className="category-count">{softwareCount} товаров</span>
            </Link>
            <Link to="/catalog?category=database" className="category-card">
              <div className="category-icon">🗄️</div>
              <h3>Базы данных</h3>
              <p>Надежные СУБД для вашего бизнеса</p>
              <span className="category-count">{databaseCount} товаров</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

