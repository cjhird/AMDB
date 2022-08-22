import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react' // Import hooks
import axios from 'axios' // Import axios

import { getMovies } from './components/helpers/search.js'

// Import Pages/Components
import Landing from "./components/pages/Landing"
import MovieSearch from "./components/pages/MovieSearch"
import MovieSingle from "./components/pages/MovieSingle"
import NotFound from "./components/NotFound"
import PageNavBar from "./components/PageNavBar"
import Login from "./components/users/Login"
import Register from "./components/users/Register"
import UserProfile from "./components/users/UserProfile"

const App = () => {

  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [tags, setTags] = useState([])
  const [error, setError] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/movies")
        setMovies(data)
        // getMovies(data)
        console.log(data)
      } catch (error) {
        setError(error)
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <PageNavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/search" element={<MovieSearch />} />
          <Route path="/movies/:movieId" element={<MovieSingle filteredMovies={filteredMovies} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:userId" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
