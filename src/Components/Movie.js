import React, { useState } from 'react';
import './Movie.css'
import YouTube from "react-youtube";

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

// const TRAILER = "https://api.themoviedb.org/3/movie/343611?api_key={api_key}";

const TRAILER_YOUTUBE_URL = "https://www.youtube.com/watch?v=";

const setVoteClass = (vote) => {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 6) {
        return "orange";
    } else {
        return "red";
    }
}

function Movie({ title, poster_path, overview, vote_average, trailerUrl }) {

    // const handleOnClick = (trailerUrl) => {
    // fetch(API)
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log('DATA ==> ', data);
    //     setMovies(data.results);
    //   });
    // console.log('KEY --', movieId);

    // }

    const [trailerYoutube, setTrailerYoutube] = useState('');


    const getTrailer = async ({ trailerUrl }) => {
        const response = await fetch(trailerUrl);
        const jsonData = await response.json();
        // console.log('JSON ---- ', jsonData.results.length > 0 ? jsonData.results[0].key : '');
        // console.log('URL -- ',TRAILER_YOUTUBE_URL + (jsonData.results.length > 0 ? jsonData.results[0].key : ''));
        setTrailerYoutube(TRAILER_YOUTUBE_URL + (jsonData.results.length > 0 ? jsonData.results[0].key : '404'))
    }

    return (
        <div className="movie">
            <img
                src={(
                    poster_path ?
                        (IMG_API + poster_path) :
                        "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80")}
                alt={title} />

            <div className="movie-info">
                <h5>{title}</h5>
                <div className="popularity">
                    {/* <span class="fa fa-star checked"></span> */}
                    <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
                </div>
            </div>

            <div className="overlay">

            </div>
            <div className="movie-over">
                <h2>Overview</h2>
                <p>{overview}</p>
                <button
                    className="btn"
                    // key={movieId}
                    // onClick={getTrailer({ trailerUrl })}
                >
                    <a
                        onClick={getTrailer({ trailerUrl })}
                        href={trailerYoutube}
                        target="_blank"
                    >
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Movie
