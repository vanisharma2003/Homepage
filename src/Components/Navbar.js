import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full h-[100px]  bg-transparent flex flex-row justify-between items-center'>
      <img src='https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png' className='h-16 w-36 ml-8 mt-4'/>
      <ul className='flex flex-row'>
       <li className='ml-8 font-bold text-lg'><a href="#">MENU</a></li>
       <li className='ml-8 font-bold text-lg'><a href="#">LOCATION</a></li>
       <li className='ml-8 font-bold text-lg'><a href="#">ABOUT</a></li>
       <li className='ml-8 font-bold text-lg'><a href="#">CONTACT</a></li>
      </ul>
      <button className='w-20 h-8 bg-blue-600 text-lg text-white mr-8'>Login</button>
    </div>
  )
}
