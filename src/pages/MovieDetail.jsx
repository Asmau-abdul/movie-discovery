import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetails, IMG_URL } from '../utils/api'

const MovieDetail = () => {

  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    setError(null)
    getMovieDetails(id).then(data => {
      setMovie(data)
      console.log(data)
    }).catch(err => setError(err.message))
    .finally(() => setLoading(false))
  },[id])

  return (
    <div>
      {error && <p>{error}</p>}
      {!error && loading && <p>Loading</p>}      
      {!error && !loading && movie && <div className='grid sm:grid-cols-2 gap-6 p-6'>
          <div>
            <img 
              src={movie.poster_path ? `${IMG_URL}${movie.poster_path}` : 'https://placehold.co/500x750?text=No+Image'}
              alt={movie.title}
              className='w-full'
              />
          </div>
          <div className='p-3'>
            <h1 className='text-xl font-semibold md:text-2xl mb-1'>{movie.title}</h1>
            <p className='text-gray-400 text-sm md:text-lg mb-5'>{movie.release_date?.slice(0,4)} . ⭐ {movie.vote_average.toFixed(1)}</p>
            <p className='text-sm md:text-lg mb-2'>{movie.overview ? movie.overview : 'No overview available'}</p>
            <h3 className='mb-2'>Runtime: {movie.runtime ? `${Math.floor(movie.runtime/60)}h ${movie.runtime%60}m` : 'No run time available'}</h3>
            <h3>Genre: {movie.genres.map(genre => (
              <span key={genre.id} className='rounded-full px-2 mr-2 bg-gray-700 text-white'>{genre.name} </span>
            ))}</h3>
          </div>
        </div>}
    </div>
  )
}

export default MovieDetail