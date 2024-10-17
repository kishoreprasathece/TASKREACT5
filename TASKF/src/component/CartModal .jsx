import React from 'react';

const CartModal = ({ cart, setCart, setModalOpen }) => {
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.id} className="flex justify-between items-center py-2">
                <span className='line-clamp-2' >{item.title}</span>
                <img className="my-4" src={item.image} alt={item.title} width="60" />
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <button
          className="mt-4 bg-gray-300 px-4 py-2 rounded"
          onClick={() => setModalOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
