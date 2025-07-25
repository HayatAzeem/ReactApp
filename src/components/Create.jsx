import React, { useContext } from 'react'
import { useState } from 'react'
import { ProductContext } from '../utils/Context'; // Adjust the import path as necessary
import {nanoid} from 'nanoid'; // Import nanoid for unique IDs if needed

const Create = () => {
  const { products, setproducts } = useContext(ProductContext);
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")

    const AddProductHandler = (e) => {
        e.preventDefault();

        if(title.trim().length<5 || image.trim().length<5 || description.trim().length<5 || price.trim().length<1 || category.trim().length<5){
            alert("Please fill all the fields correctly.");
            return; // Stop the function if validation fails
        }
        const product = {
            id: nanoid(),  // Generate a unique ID using nanoid if needed
            title,
            image,
            description,
            price,
            category
        };
        setproducts([...products, product]);
        console.log({ title, image, description, price, category })
        // setTitle("");
        // setImage("");
        // setDescription("");
        // setPrice("");
        // setCategory("");
    };

  return (
    <form onSubmit={AddProductHandler} className='flex flex-col items-center p-[5%] w-screen h-screen'>
        <h1 className='mb-3 w-1/2 text-3xl'>Add New Product</h1>
        <input type="url" placeholder='image link' className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3' onChange={(e) => setImage(e.target.value)} value={image} />
        <input type="text" placeholder='title' className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3' onChange={(e) => setTitle(e.target.value)} value={title} />
        <div className='flex w-1/2 justify-between'>
            <input type="number" placeholder='price' className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3' onChange={(e) => setPrice(e.target.value)} value={price} />
            <input type="text" placeholder='category' className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3' onChange={(e) => setCategory(e.target.value)} value={category} />
        </div>
        <textarea placeholder='description' className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3' rows="10" onChange={(e) => setDescription(e.target.value)} value={description} />
        <div className='w-1/2'>
            <button className='py-2 px-5 border rounded border-blue-300 text-blue-400'>
                Add New Product
            </button>
        </div>
        {/* <button className='py-2 px-5 border rounded border-blue-300 text-blue-400' onClick={(e) => {
            // Add product to the database
            console.log({ title, image, description, price, category })
            e.preventDefault();
            setTitle("");
            setImage("");
            setDescription("");
            setPrice("");
            setCategory("");
        }}>Add Product</button>
        <button className='py-2 px-5 border rounded border-red-300 text-red-400' onClick={(e) => {
            e.preventDefault();
            setTitle("");
            setImage("");
            setDescription("");
            setPrice("");
            setCategory("");
        }}>Reset</button> */}

    </form>
  )
}

export default Create