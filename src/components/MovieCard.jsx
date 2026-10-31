import React from 'react'
import { Link } from 'react-router-dom'
import { IMG_URL } from '../utils/api'
import { Star } from 'lucide-react'

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className='block bg-gray-800 rounded-xl overflow-hidden border border-slate-700
    hover:-translate-y-1 hover:border-violet-400 transition relative'>
        <img 
            src={movie.poster_path ? `${IMG_URL}${movie.poster_path}` : 'https://placehold.co/500x750?text=No+Image'}
            alt={movie.title}
            className='w-full'
        />

        <div className='absolute top-2 left-2 bg-gray-950/80 px-2 py-1 rounded-full text-xs'>
          <p className='flex items-center gap-1'>
            <Star size={10} color='#facc15' fill='#facc15'/> {movie.vote_average.toFixed(1)}
          </p>
        </div>

        <div className='p-3'>
            <h3 className='text-white font-semibold truncate'>{movie.title}</h3>
            <p className='text-gray-400 text-sm'>{movie.release_date?.slice(0,4)}</p>
        </div>
    </Link>
  )
}

export default MovieCard