// import React from 'react'
// import { bg } from '../assets/Images'
// import { gender } from '../Constant'

// function ShopbyGender() {
//   return (
//     <div  className='flex flex-row justify-center items-center p-2 mt-10 border w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 h-80 sm:flex sm:flex-col md:flex-col md:w-full '>
//         <div className='flex text-3xl font-bold justify-center items-center w-1/3'>
//         <h1>Discover Your Look</h1>
//         </div>
//         <div className='flex flex-row w-2/3 gap-6 h-64'>
//         {
//           gender.map((e) => (
//             <a href='/ProductList/'><div key={e.id} className=' justify-center items-center  mt-4 w-60 h-64 '>
//                 <img src={e.imgURL} sizes={64}  className='border rounded-full justify-center items-center bg-gray-200 hover:scale-110 '></img>
//             <div className=' text-bold text-2xl flex justify-center items-center mt-4'>{e.catogory}</div>
//             </div></a>
//           ))}
//         </div>




//     </div>
//   )
// }

// export default ShopbyGender

import React from 'react';
import { bg } from '../assets/Images';
import { gender } from '../Constant';

function ShopbyGender() {
  return (
    // <div className="flex  lg:flex-col items-center p-2 mt-10 border lg:w-full gap-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 h-auto sm:h-auto md:h-auto lg:h-92 sm:flex-col md:flex-col">
    <div className=' flex flex-col justify-center items-center p-2 mt-10 w-full ' >
       <div className='p-8   w-4/4 shadow-lg z-40 transition-colors duration-500 '>
      <div className=' flex text-3xl font-bold justify-center items-center'>
        <h1>Discover Your Look</h1>
      </div>
      <div className="flex flex-row flex-wrap gap-6 justify-center w-full items-center p-4 ">
        {gender.map((e) => (
          <a href="/ProductList/" key={e.id}>
            <div className="flex flex-col items-center mt-4 md:w-48 lg:w-52">
              <img
                src={e.imgURL}
                alt={e.catogory}
                className="border rounded-full bg-gray-200 w-40 h-40 md:w-48 md:h-48 lg:w-60 lg:h-48 hover:scale-110 transition-transform duration-300"
              />
              <div className="font-bold text-xl mt-4 lg:text-2xl text-center">
                {e.catogory}
              </div>
            </div>
          </a>
        ))}
      </div>
      </div>
    </div>
  );
}

export default ShopbyGender;
