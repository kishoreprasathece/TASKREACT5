import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';



const Content = () => {

const [data , setData] = useState([]);
const [error , setError]= useState(null);


useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

    return (
        <div>
            {error ? (<p>error :{error}</p>) : ( <ul>
{data.map(item=>(
    <li key={item.id} >
<div>
    <h1>{item.title}</h1>
    <img src={item.image} alt={item.title} width="120" />
    <p>{item.price}</p>
    <button>add to cart</button>
</div>
</li>
          ))}
        </ul>
      )}
 <Footer/>
        </div>
    );
};

export default Content;