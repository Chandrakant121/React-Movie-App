import { useEffect, useState } from "react"
import { React } from "react"
import { Movie } from "./Movie"
import { useNavigate } from 'react-router-dom'
const MoviesData = () => {
    let datastore = JSON.parse(localStorage.getItem("logindetail"));
    const navigate = useNavigate()
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
    const logoutpage = () => {
        localStorage.clear();
        navigate("/login")
    }
    const dash = () => {
        navigate("/dashboard")
    }



    return (
        <>  {
            datastore ?
                <header>
                    <div>
                        <button onClick={logoutpage} >Logout</button>
                        <button onClick={dash} >Dashboard</button>
                    </div>
                    <form onSubmit={handleOnsubmit}>
                        <input type="search" className="search" placeholder="search" value={searchTerm}
                            onChange={handleOnChange} />
                    </form>
                </header>
                : <h1>Please Login</h1>
        }   <div className="movie-container">
                {
                    datastore ? movies.map((movie) => {
                        return (<Movie {...movie} />)
                    }) : <div>Please Login</div>
                }
            </div>
        </>
    );
}


export default MoviesData;

// "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0698d5b029ea105a22b2da4a518b2359"
