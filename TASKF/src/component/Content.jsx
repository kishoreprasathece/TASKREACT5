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
            {error ? (<p>error :{error}</p>) : ( <ul className='grid grid-cols-4 mx-20 my-12 gap-4 '  >
{data.map(item=>(
    <li key={item.id} >
<div>
    <h1 className=' font-rig text-indigo-400'  >{item.title}</h1>
    <img className='my-4' src={item.image} alt={item.title} width="120" />
   <p className='text-xl my-2'>Price: ${item.price}</p>
    <button className='bg-orange-300 p-2 my-3 gap-2 rounded' >add to cart</button>
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