import React, { useEffect, useState } from 'react'
import { getPopularMovies } from '../utils/api'
import MovieCard from '../components/MovieCard'

const Home = () => {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setError(null)
        getPopularMovies()
        .then(data => setMovies(data))
        .catch(err => setError(`${err}`))
        .finally(() => setLoading(false))
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

  return (
    <div>
        <h1 className='text-2xl font-bold mb-4'>Popular movies</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    </div>
  )
}

export default Home