import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { getTags, tagFilter } from '../helpers/search.js'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const MovieSearch = () => {



  const [error, setError] = useState([])

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data } = await axios.get("http://localhost:4000/movies")
  //       setMovies(data)
  //       console.log(data)
  //     } catch (error) {
  //       setError(error)
  //       console.log(error)
  //     }
  //   }
  //   getData()
  // }, [])


  const genreDummy = ['kids', 'Action', 'Adventure', 'sci-fi', 'fantasy', 'animals']

  const handleClick = (e) => {
    getTags(e.target.value)
  }


  

  // console.log(movies[0].name)
  return (
    <Container className='search-wrapper'>
      <h1>MovieSearch</h1>
      <div className='search-container text-md-center text-end my-md-0 my-3'>
          <input type="text" className="seach" placeholder="Search..." onKeyUp={handleClick}></input>
        </div>
      <div>
        {genreDummy.map(genre => {
          return <button name="filtered" onClick={handleClick} value={genre}>{genre}  | </button>
        })}
      </div>
      {tagFilter()}
      {/* <div>
        {movies.map(movie => {
          return <>
            <div className='d-flex justify-content-around align-items-center'>
              <div className='card-container'>
                <Link to={`/movies/${movie._id}`} >
                  <img src={movie.posterImg} alt='poster' className='w-1' />
                  <div className="text overlay bg-gradient"><p>{movie.name}, {movie.releaseYear}</p></div>
                </Link>
              </div>
            </div>
          </>
        })}
      </div> */}
    </Container>

  )
}

export default MovieSearch