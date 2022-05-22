import { React } from "react"
const images = "https://image.tmdb.org/t/p/w500"

export const Movie = (props) => {

    const setVoteClass = (vote) => {
        if (vote >= 8) {
            return "green"
        }
        else if (vote >= 6) {
            return "orange"
        }
        else {
            return "red"
        }
    }



    return <div className="movie">
        <img src={images + props.poster_path} alt={props.title} />
        <div className="movie-info">
            {/* <div>{props.overview}</div> */}
            <h3>{props.title}</h3>
            <span className={`tag ${setVoteClass(props.vote_average)}`} >{props.vote_average}</span>
        </div>

        <div className="movie-over">
            <h2>Overview:</h2>
            <p>{props.overview}</p>
        </div>

    </div>
}

// export default Movie