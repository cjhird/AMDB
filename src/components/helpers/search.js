// import { useState, useEffect } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'

// const SearchFunctions = () => {
let value = ''
let movies = {}
let tags = []

// const [movies, setMovies] = useState([])
// const [filteredMovies, setFilteredMovies] = useState([])
// const [ tags, setTags ] = useState([])
// const [error, setError] = useState([])

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

export const getMovies = (movieData) => {
  movies = movieData
  return movies
}

export const getSearch = (inputText) => {
  value = inputText
  console.log('search value -> ', value)
  return value
}


export const getTags = (tagValue) => {
  tags = tagValue
  console.log(tagValue)
  tagFilter()
  return tags
}


export const tagFilter = () => {
  const filteredMovies = movies.filter(movie => movie.tags.includes(tags))
  console.log('filtered movies -->', filteredMovies)
  return (
    <div>
      {filteredMovies.map(movie => {
        return <>
          <div className='d-flex justify-content-around align-items-center' key={movie._id} >
            <div className='card-container'>
              <Link to={`/movies/${movie._id}`} >
                <img src={movie.posterImg} alt='poster' className='w-1' />
                <div className="text overlay bg-gradient"><p>{movie.name}, {movie.releaseYear}</p></div>
              </Link>
            </div>
          </div>
        </>
      })}
    </div>
  )
}






// }

// export default SearchFunctions





// 1. getMovies(data) when page loads in App.js
// 2. useState for movies data (getMovies in search.js)
// 3. getTags(event.target.value) from handleClick from MovieSearch.js
// 4. getSearch(event.target.value) from PageNavBar.js
// 5. useState for tags (getTags in search.js)
// * FILTER

// 1. useEffect -> filter movies that includes tags -> setFilteredMovies(filteredArray)
// 2. handleSearch



    // useEffect(() => {
  //   const filteredArray = count.filter(country => country.region === region)
  //   setFilteredCountries(filteredArray)
  //   console.log(filteredCountries)
  // }, [region])

  // const handleSearch = (event) => {
  //   const regexSearch = new RegExp(event.target.value, 'i')
  //   console.log(regexSearch)
  //   console.log(region)
  //   setFilteredCountries(countries.filter(country => {
  //     return regexSearch.test(country.name.common)  && (country.region === region || region === 'All')
  //   }))