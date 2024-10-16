import React, { useState } from 'react';
import Navbar from './component/Navbar';
import Content from './component/Content';
import CartModal from './component/CartModal ';


const App = () => {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Navbar cart={cart} setModalOpen={setModalOpen} />
      <Content cart={cart} setCart={setCart} />
      {isModalOpen && <CartModal cart={cart} setCart={setCart} setModalOpen={setModalOpen} />}
    </div>
  );
};

export default App;
