
import React from 'react';

const Navbar = ({ cart, setModalOpen }) => {
  return (

<nav className="bg-black p-2">
  <h1 className="text-white text-center font-rig -my-3 text-3xl">ALPHA LIFE STYLE</h1>
  <div className="flex justify-between items-center">
    <div className="flex flex-col items-center ml-auto mx-10">
    <div className="text-red-500 text-2xl bg-opacity-85 "> {cart.length}</div>
      <img 
        onClick={() => setModalOpen(true)} 
        className='w-24 cursor-pointer'  
        src='image/cartp.png' 
        alt="Cart"
      />
     
    </div>
  </div>
</nav>

   
  );
};

export default Navbar;
