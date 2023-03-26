import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex flex-col text-center w-screen py-4 text-white'>
        <div className='flex flex-row justify-between px-5'>
          <h1 className='md:text-3xl text-2xl font-bold underline'>
            Crypto.io
          </h1>
          <div className='flex flex-row justify-evenly'>
            <Link to='/'>
              <h2 className='text-2xl px-3 hover:underline'>
                Dashboard  
              </h2>
            </Link>
            <Link to='Account'>
              <h2 className='text-2xl px-3 hover:underline'>
                Account
              </h2>
            </Link>  
          </div>
        </div>
    </div>
  )
}

export default Header