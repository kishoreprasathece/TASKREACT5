
import React from 'react';

const Navbar = ({ cart, setModalOpen }) => {
  return (
    <nav className="bg-black p-4">
      <h1 className="text-white text-center font-rig text-xl">ALPHA LIFE STYLE</h1>
      <div className="flex justify-between items-center">
        <div className="text-red-500  ">Cart Items: {cart.length}</div>
        <button
          className="bg-green-500 text-white px-3 py-1 rounded" 
          onClick={() => setModalOpen(true)}>

          Cart
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
