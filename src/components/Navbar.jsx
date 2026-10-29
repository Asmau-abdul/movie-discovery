import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ onPage, currentPage }) => {
  return (
    <div className='flex justify-between p-4 bg-gray-900/80 backdrop-blur
    sticky top-0 z-50'>
      <h1>Movie Discovery</h1>
      <ul className='flex gap-4 text-xs text-gray-400'>
        <li className='hover:text-sm transition-all ease-in-out duration-[0.3s]'>
          <Link to={'/'}
           className={`${currentPage === 'home' ? 'page' : ''}`}
           onClick={() => onPage('home')}>Home</Link>
        </li>
        <li className='hover:text-sm transition-all ease-in-out duration-[0.3s]'>
          <Link to={'/search'}
           className={`${currentPage === 'search' ? 'page' : ''}`}
           onClick={() => onPage('search')}>Search</Link>
        </li>
        <li className='hover:text-sm transition-all ease-in-out duration-[0.3s]'>
          <Link to={'/favourites'}
           className={`${currentPage === 'favourites' ? 'page' : ''}`}
           onClick={() => onPage('favourites')}>Favourites</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar