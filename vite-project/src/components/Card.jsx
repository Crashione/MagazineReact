import React, { useState } from 'react';

const Card = ({ items }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {items.map((item, index) => (
          <div 
            key={index}
            className="border p-4 rounded hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="text-green-600 text-2xl font-bold">{item.price} ₽</p>
            <button onClick={() => {
              setSelectedItem(item);
              setShowModal(true);
            }}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
              Подробнее
            </button>
          </div>
        ))}
      </div>

      {showModal && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h2 className="text-2xl font-bold mb-4">{selectedItem.name}</h2>
            <p className="text-3xl text-green-600 font-bold mb-4">
              {selectedItem.price} ₽
            </p>
            <button 
              onClick={() => setShowModal(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 cursor-pointer"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;