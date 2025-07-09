import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import axios from './axios'; // Adjust the import path as necessary
import { useEffect } from 'react';

export const ProductContext = createContext();

function Context(props) {
    const [products, setproducts] = useState(null)
    const getproducts = async () => {
        try{
            const {data} = await axios("/products");
            setproducts(data);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        getproducts();
    }, [])
  return (
    <ProductContext.Provider value={{products, setproducts }}>
            {props.children}
        </ProductContext.Provider>
        );
}

export default Context