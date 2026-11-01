import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Search from './pages/Search'
import MovieDetail from './pages/MovieDetail'
import Favourites from './pages/Favourites'
import { useEffect, useState } from 'react'

function App() {

  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem('favourites')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() =>{
    localStorage.setItem('favourites', JSON.stringify(favourites))
  },[favourites])

  const toggleFavourite = (id) => {
    setFavourites(prev => prev.includes(id) ? prev.filter(f => f != id) : [...prev, id])
  }

  return (
    <BrowserRouter>
      <div className='bg-gray-950 text-gray-100 min-h-screen'>
        <Navbar />

        <button onClick={() => toggleFavourite({id: 1, title: 'Test'})}>
          Click to test</button>

        <main className='max-w-6xl mx-auto px-6 py-8'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/movie/:id' element={<MovieDetail/>}/>
            <Route path='/favourites' element={<Favourites/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
