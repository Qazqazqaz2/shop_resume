import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <div className="container">
          <h1 className="cart-title">Корзина</h1>
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Ваша корзина пуста</h2>
            <p>Добавьте товары из каталога, чтобы продолжить покупки</p>
            <Link to="/catalog" className="continue-shopping-btn">
              Перейти в каталог
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="container">
        <div className="cart-header">
          <h1 className="cart-title">Корзина</h1>
          <button onClick={clearCart} className="clear-cart-btn">
            Очистить корзину
          </button>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <Link to={`/product/${item.id}`} className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </Link>
                <div className="cart-item-info">
                  <Link to={`/product/${item.id}`} className="cart-item-name">
                    {item.name}
                  </Link>
                  <div className="cart-item-category">
                    {item.category === 'software' ? '💿 Софт' : '🗄️ БД'}
                  </div>
                </div>
                <div className="cart-item-quantity">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    −
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-price">
                  {(item.price * item.quantity).toLocaleString()} ₽
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-item-btn"
                  title="Удалить"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2 className="summary-title">Итого</h2>
            <div className="summary-row">
              <span>Товаров:</span>
              <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </div>
            <div className="summary-row total">
              <span>Сумма:</span>
              <span>{getCartTotal().toLocaleString()} ₽</span>
            </div>
            <button className="checkout-btn">
              Оформить заказ
            </button>
            <Link to="/catalog" className="continue-shopping-link">
              ← Продолжить покупки
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

