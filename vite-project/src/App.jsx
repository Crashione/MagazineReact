import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  
  const products = [
    { name: 'Ноутбук', price: 50000 },
    { name: 'Смартфон', price: 25000 },
    { name: 'Наушники', price: 3000 },
    { name: 'Клавиатура', price: 2000 },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header name="Мой Магазин">
        <ul className="flex gap-5 list-none m-0 p-0">
          <li><a href="/" className="text-white no-underline hover:text-blue-300 transition-colors">Главная</a></li>
          <li><a href="/" className="text-white no-underline hover:text-blue-300 transition-colors">Каталог</a></li>
          <li><a href="/" className="text-white no-underline hover:text-blue-300 transition-colors">О нас</a></li>
          <li><a href="/" className="text-white no-underline hover:text-blue-300 transition-colors">Контакты</a></li>
        </ul>
      </Header>

      <Card items={products} />

      <Footer name="© Все права защищены.">
        <ul className="flex gap-5 list-none m-0 p-0">
          <li><a href="/" className="text-white no-underline hover:text-blue-300 transition-colors">Политика конфиденциальности</a></li>
          <li><a href="/" className="text-white no-underline hover:text-blue-300 transition-colors">Поддержка</a></li>
        </ul>
      </Footer>
    </div>
  );
}

export default App;