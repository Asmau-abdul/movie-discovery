import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 bg-gray-900/80 backdrop-blur
    sticky top-0 z-50'>
      <h1>Movie Discovery</h1>
      <ul className='flex gap-4'>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/search'}>Search</Link>
        </li>
        <li>
          <Link to={'/favourites'}>Favourites</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar