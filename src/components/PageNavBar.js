
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import { useNavigate } from 'react'

import SearchFunctions from './helpers/search.js'
import { getSearch } from './helpers/search.js'

// Import React Bootstrap Components
import NavBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'

const PageNavBar = () => {
  const genreDummy = ['kids', 'action', 'Adventure', 'sci-fi', 'fantasy', 'animals']
  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [error, setError] = useState([])
  const navigate = useNavigate()

  const handleClick = (event) => {
    // console.log(event.target.value)
    event.preventDefault()
    getSearch(event.target.value)

    if (event.target.value !== ''){
      navigate('/search')
    } else {
      navigate(-1)
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/movies")
        setMovies(data)
        console.log(data)
      } catch (error) {
        setError(error)
        console.log(error)
      }
    }
    getData()
  }, [])




  return (

    <NavBar expand="md" >
      <Container>
        <NavBar.Brand as={Link} to="/">🎥 <span className="logo fw-bold">AMDB</span></NavBar.Brand>

        
        <NavBar.Toggle aria-controls="basic-navbar-nav"></NavBar.Toggle>
        <NavBar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <div className='search-container text-md-center text-end my-md-0 my-3'>
          <input type="text" className="seach" placeholder="Search..." onKeyUp={handleClick}></input>
        </div>

            <Nav.Link as={Link} to="/register" className=''><span className="underline">Register</span></Nav.Link>
            <Nav.Link as={Link} to="/login" className='ms-5 my-sm-3'><span className="underline">Login</span></Nav.Link>


        </NavBar.Collapse>

      </Container>

    </NavBar>
  )
}

export default PageNavBar