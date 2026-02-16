import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getProductIcon } from './ProductIcons';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const IconComponent = getProductIcon(product.iconId || product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-container">
          {IconComponent ? (
            <IconComponent className="product-svg" />
          ) : (
            <div className="product-placeholder">{product.name}</div>
          )}
          {discount > 0 && (
            <span className="discount-badge">-{discount}%</span>
          )}
          <span className="category-badge">
            {product.category === 'software' ? '💿 Софт' : '🗄️ БД'}
          </span>
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <div className="product-rating">
            <span className="stars">{'⭐'.repeat(Math.floor(product.rating))}</span>
            <span className="rating-value">{product.rating}</span>
            <span className="reviews">({product.reviews} отзывов)</span>
          </div>
          <div className="product-price">
            {product.originalPrice && (
              <span className="original-price">{product.originalPrice.toLocaleString()} ₽</span>
            )}
            <span className="current-price">{product.price.toLocaleString()} ₽</span>
          </div>
        </div>
      </Link>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        <span>🛒</span>
        <span>В корзину</span>
      </button>
    </div>
  );
};

export default ProductCard;

