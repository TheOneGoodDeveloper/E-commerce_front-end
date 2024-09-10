import React from 'react'
import { banner } from '../assets/Images'

function Hero() {
  return (

    <div className='relative'>
        <img src={banner} className='w-full h-4/5 object-cover'></img>
        <div className=" absolute flex translate-y-6 translate-x-6 left-24 top-44 flex-col text-white ">
        <h1 className='text-3xl font-bold mb-4'>Welcome to Our Site!</h1>
        <p className='text-lg mb-4'>Your journey to excellence starts here.</p>
        <button className="bg-blue hover:text-black text-white font-bold py-2 px-2 rounded">
          Learn More
        </button>
      </div>
    </div>

  )
}

export default Hero