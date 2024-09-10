import React from 'react'
import { products } from '../Constant'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ShopbyCategory() {
  return (
    <div>
    <div className=' flex flex-col justify-center items-center p-4 mt-10 border w-full' >
        <div className=' flex text-3xl font-bold justify-center items-center'>
            <h1>Shop By Categories</h1>
            </div>
        <div className='flex flex-row gap-10 justify-center w-full items-center p-4 overflow-x-scroll '>
          {
          products.map((e) => (
            <a href='/ProductList/'><div key={e.id} className=' justify-center items-center mt-4 w-40 '>
                <img src={e.imgURL} sizes={48}  className='border rounded-full justify-center items-center bg-gray-200 hover:scale-110 '></img>
            <div className=' text-bold text-2xl flex justify-center items-center mt-4'>{e.category}</div>
            </div></a>
          ))}
        </div>
    </div>


    </div>
  )
}

export default ShopbyCategory