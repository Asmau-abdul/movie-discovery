import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Search from './pages/Search'
import MovieDetail from './pages/MovieDetail'
import Favourites from './pages/Favourites'

function App() {

  return (
    <BrowserRouter>
      <div className='bg-gray-950 text-gray-100 min-h-screen'>
        <Navbar />

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
