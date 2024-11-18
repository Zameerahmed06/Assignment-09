import React from 'react'

export default function Nav() {
  return (
    <nav className='bg-blue-600 h-20  flex justify-around items-center'>
       {/* logo */}
       <div className='h-16 w-28 bg-black rounded-[50px]'></div>

       {/* subtitles */}
       <div className='h-10 w-64 bg-yellow-600 rounded-2xl'></div>

       {/* links */}
       <ul className='flex justify-around gap-2'>
         <li className='bg-white h-10 w-32 rounded-2xl'></li>
         <li className='bg-green-600 h-10 w-32 rounded-2xl'></li>
         <li className='bg-black h-10 w-32 rounded-2xl'></li>
       </ul>
 
    </nav>
  )
}
