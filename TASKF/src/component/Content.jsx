import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';

const Content = ({ cart, setCart }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  const addToCart = (item) => {
    const isItemInCart = cart.find(product => product.id === item.id);
    
    if (!isItemInCart) {
      setCart([...cart, item]);
    } else {
      alert("Item already added to the cart");
    }
  };

  return (
    <div className="bg-teal-200">
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  mx-8 bg-teal-200 ">
          {data.map(item => (
            <li key={item.id} className="p-4 border rounded shadow-black">
              <h1 className="font-bold truncate font-rig text-black">{item.title}</h1>
              <img className="my-4" src={item.image} alt={item.title} width="120" />
              <p className="text-xl my-2">Price: ${item.price}</p>
              <button
                className="bg-yellow-400 p-2 my-3 rounded"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      )}
      <Footer />
    </div>
  );
};

export default Content;
