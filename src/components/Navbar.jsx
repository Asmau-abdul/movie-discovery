import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const links = [
    {path: '/', label: 'Home', end: true},
    {path: '/search', label: 'Search'},
    {path: '/favourites', label: 'Favourites'}
  ]

  return (
    <div className='bg-gray-900/80 backdrop-blur
    sticky top-0 z-50 border-b border-gray-800'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
        <h1 className='text-lg font-medium'>Movie Discovery</h1>
        <ul className='flex gap-4 text-xs text-gray-400'>
          {links.map(link => (
            <li key={link.path}
            className='hover:text-white transition-all ease-in-out duration-300'>
              <NavLink to={link.path} end={link.end}
              className={({ isActive }) => isActive ? 'border-b-2 border-b-violet-400 pb-1 text-white transition-all ease-in-out duration-300' 
              : 'border-b-2 border-transparent'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar