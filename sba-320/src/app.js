import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrapmin.css";
import "./App.css";
import MovieList from './Components/MovieList';
import MovieListHeading from './Components/movieListHeading';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async () => {
        const url = "http://www.omdbapi.com/?s=avengers&apikey=9e914884"

        const response = await fetch(url);
        const responseJson = await response.json();

        console.log(responseJson);
        setMovies(responseJson.Search);
    };

    useEffect(() => {
        getMovieRequest();
    }, []);

    return (
        <div className='container-fluid movie-app'>
            <div className='row'>
                <MovieListHeading />
            </div>
                <div classNmae='row'>
            <MovieList movies = {movies} />
            </div>
        </div>
    );
};

export default App;