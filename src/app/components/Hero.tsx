import React from 'react'

function Hero() {
  return (
    <main>
        <div className='flex gap-8 mx-10 my-10'>
             {/* Fisrt Row 2 cards */}
           <div className='w-1/2 bg-red-600 h-96 rounded-2xl'></div>
           <div className='w-6/12 bg-yellow-600 h-96 rounded-2xl'></div>
        </div>
      <div className='flex gap-8 mx-10 my-10'>
       {/* Second Row 3 cards */}
      <div className='w-4/12 bg-black h-96 rounded-2xl'></div> 
      <div className='w-4/12 bg-pink-600 h-96 rounded-2xl'></div> 
      <div className='w-4/12 bg-red-600 h-96 rounded-2xl'></div> 
      </div> 
    </main>
  )
}

export default Hero
