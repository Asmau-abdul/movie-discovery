import React from 'react'
import { Link } from 'react-router-dom'
import { IMG_URL } from '../utils/api'

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className='block bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition'>
        <img 
            src={movie.poster_path ? `${IMG_URL}${movie.poster_path}` : 'https://placehold.co/500x750?text=No+Image'}
            alt={movie.title}
            className='w-full'
        />

        <div className='p-3'>
            <h3 className='text-white font-semibold truncate'>{movie.title}</h3>
            <p className='text-gray-400 text-sm'>{movie.release_date?.slice(0,4)} . ⭐ {movie.vote_average.toFixed(2)}</p>
        </div>
    </Link>
  )
}

export default MovieCard