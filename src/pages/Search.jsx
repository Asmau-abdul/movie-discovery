import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchMovies } from '../utils/api'
import MovieCard from '../components/MovieCard'

const Search = () => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [results, setResults] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [params, setParams] = useSearchParams()
  const q = params.get('q')

  const handleSearch = () => {
    if (searchInput.trim() === '') return
    setParams({ q: searchInput.trim() })
    setSearchInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  useEffect(() => {
    if (!q) return
    setLoading(true)
    setError(null)
    searchMovies(q)
    .then(data => {
      console.log(data)
      setResults(data)
    })
    .catch( err => setError(`${err}`))
    .finally(() => setLoading(false)) 
  },[q])

  return (
    <div>
      <h1>{q}</h1>
      <div>
        <input type="text" name="search" placeholder='Enter movie name' value={searchInput}
        onKeyDown={handleKeyDown} onChange={(e) => setSearchInput(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p>{error}</p>}
      {q && !loading && !error && results.length === 0 && <p>No results found</p>}
      {loading && <p>Loading</p>}
      {!loading && <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
          {results.map(movie => (
              <MovieCard key={movie.id} movie={movie}/>
          ))}
      </div>}
    </div>
  )
}

export default Search