import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>О магазине</h3>
          <p>Лучший выбор программного обеспечения и баз данных для вашего бизнеса</p>
        </div>
        <div className="footer-section">
          <h3>Контакты</h3>
          <p>Email: info@softwareshop.ru</p>
          <p>Телефон: +7 (999) 123-45-67</p>
        </div>
        <div className="footer-section">
          <h3>Полезные ссылки</h3>
          <a href="#support">Поддержка</a>
          <a href="#faq">FAQ</a>
          <a href="#terms">Условия использования</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Software Shop. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;

