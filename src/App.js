import React, { useEffect, useState } from 'react';
import './App.css';
import './Components/Movie.css';
import CardContainer from './Components/CardContainer';
import Nav from './Components/Nav';
import Movie from './Components/Movie';


const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fa729b9d7c076be5671b8937c1a2355e&page=1';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=fa729b9d7c076be5671b8937c1a2355e&query=';

const TRAILER_URL = 'https://api.themoviedb.org/3/movie/';
// 834404/videos?api_key=fa729b9d7c076be5671b8937c1a2355e&language=en-US'

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const i = 20;
  useEffect(() => {
    getMovies(FEATURED_API);
  }, [])

  const getMovies = (API) => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        console.log('DATA ==> ', data);
        setMovies(data.results);
      });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('submit');

    if (searchTerm.length > 0) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm('')
    }

  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
    // console.log('onChange',e.target.value);
  }

  

  return (
    <div className="App">
      <Nav
        handleSubmit={handleOnSubmit}
        searchTerm={searchTerm}
        handleChange={handleOnChange}
      />
      <div className="movie-container">


        {movies.length > 0 && movies.map((movie) => (
          <Movie key={movie.id} {...movie} trailerUrl={TRAILER_URL + movie.id + '/videos?api_key=fa729b9d7c076be5671b8937c1a2355e&language=en-US'}/>
        ))}
      </div>

      
      {/* <CardContainer /> */}
    </div>
  );
}

export default App;
