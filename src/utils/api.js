const API_KEY = import.meta.env.VITE_TMDB_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
export const IMG_URL = 'https://image.tmdb.org/t/p/w500'

export const getPopularMovies = async () => {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    if (!res.ok){
        throw new Error(`HTTPS Error! Status: ${res.status}`)
      }
    const data = await res.json()
    return data.results
}

export const searchMovies = async (query) => {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    if (!res.ok){
        throw new Error(`HTTPS Error! Status: ${res.status}`)
      }
    const data = await res.json()
    return data.results
}

export const getMovieDetails = async (id) => {
    const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    if (!res.ok){
        throw new Error(`HTTPS Error! Status: ${res.status}`)
    }
    const data = await res.json()
    return data
}