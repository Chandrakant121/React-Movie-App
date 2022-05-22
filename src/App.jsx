import { useEffect, useState } from "react"
import { React } from "react"
import { Movie } from "./Components/Movie"

function App() {

  const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0698d5b029ea105a22b2da4a518b2359";

  const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=0698d5b029ea105a22b2da4a518b2359&query="
  // const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=&04c35731a5ee918f014970082a0088b1&query="
  // const SEARCH = "http://www.omdbapi.com/?apikey=a63b3a1b&query="

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
      })
  }, [])


  const handleOnsubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results)
        })
      setSearchTerm("")
    }

  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
    // console.log(e.target.value)
  }


  return (
    <>
      <form onSubmit={handleOnsubmit}>
        <header>
          <input type="search" className="search" placeholder="search" value={searchTerm}
            onChange={handleOnChange} />
        </header>
      </form>

      <div className="movie-container">
        {
          movies.map((movie) => {
            return (<Movie {...movie} />)
          })
        }
      </div>
    </>
  );
}


export default App;

// "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0698d5b029ea105a22b2da4a518b2359"
