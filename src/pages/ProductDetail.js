import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { getProductIcon } from '../components/ProductIcons';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail">
        <div className="container">
          <div className="not-found">
            <h2>Товар не найден</h2>
            <button onClick={() => navigate('/catalog')} className="back-button">
              Вернуться в каталог
            </button>
          </div>
        </div>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const IconComponent = getProductIcon(product.iconId || product.id);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-detail">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Назад
        </button>

        <div className="product-detail-content">
          <div className="product-image-section">
            <div className="product-image-wrapper">
              {IconComponent ? (
                <IconComponent className="product-detail-svg" />
              ) : (
                <div className="product-detail-placeholder">{product.name}</div>
              )}
              {discount > 0 && (
                <span className="discount-badge-large">-{discount}%</span>
              )}
            </div>
          </div>

          <div className="product-info-section">
            <div className="product-category-badge">
              {product.category === 'software' ? '💿 Программное обеспечение' : '🗄️ База данных'}
            </div>
            <h1 className="product-detail-name">{product.name}</h1>
            
            <div className="product-rating-section">
              <div className="rating-stars">
                {'⭐'.repeat(Math.floor(product.rating))}
              </div>
              <span className="rating-value-large">{product.rating}</span>
              <span className="reviews-count">({product.reviews} отзывов)</span>
            </div>

            <div className="product-price-section">
              {product.originalPrice && (
                <span className="original-price-large">
                  {product.originalPrice.toLocaleString()} ₽
                </span>
              )}
              <span className="current-price-large">
                {product.price.toLocaleString()} ₽
              </span>
            </div>

            <div className="product-description">
              <h3>Описание</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-features">
              <h3>Основные возможности:</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <button className="add-to-cart-button-large" onClick={handleAddToCart}>
              <span>🛒</span>
              <span>Добавить в корзину</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

