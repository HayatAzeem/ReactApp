import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loading from './Loading'

function Details() {
  const [ product, setproduct ] = useState(null);
  const { id } = useParams();

  const getsingleproduct = async () => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setproduct(data);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getsingleproduct();
  }, []);

  return ( product ?
    <div className='w-[70%] flex h-full justify-between items-center m-auto p-[10%]'>
      
      <img className='object-contain h-[80%] w-[40%]' 
      src={`${product.image}`} alt="" />
      <div className='content w-[50%]'> 
        
        <h1 className='text-4xl'>
          {product.title}
          </h1>
        <h3 className='text-zinc-400 my-5'>{product.category}</h3>
        <h2 className='text-red-300 mb-3'>$ {product.price}</h2>
        <p className='mb-[5%]'>{product.description}</p>
        <Link className='py-2 px-5 mr-5 border rounded border-blue-200 text-blue-300'>Edit</Link>
        <Link className='py-2 px-5 border rounded border-red-200 text-red-300'>Delete</Link>

      </div>
      
    </div> : (<Loading />)
  ) 
}

export default Details