import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Nav from './Nav'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Home() {
  const { products } = useContext(ProductContext)
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setfilteredProducts] = useState(null);
 
  const getproductscategory = async () => {
    try{
      const {data} = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      setfilteredProducts(data);
    }
    catch(error){
      console.log(error)
    }
  };
  useEffect(() => {
    if(!filteredProducts || category == "undefined"){
      setfilteredProducts(products);
    }
    if (category != "undefined") {
      getproductscategory();
    }
  }, [category,products]);
  return products ? (
    <>
    <Nav></Nav>
    <div className='w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
      {filteredProducts && filteredProducts.map((p,i) => (
        <Link key={p.id} to={`/details/${p.id}`} className='mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex-col flex justify-center items-center'>
        <div 
          className='hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center'
          style={{backgroundImage: `url(${p.image})`,
          }}
          ></div>
          <h1 className='hover:text-blue-300'>{p.title}</h1>
      </Link>))}
      
    </div>
    </>
    
  ) : (
    <Loading />
  );
}

export default Home