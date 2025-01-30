import React, {useEffect, useState} from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from './Components/MovieList';
import MovieListHeading from './Components/movieListHeading';
import SearchBox from './Components/SearchBox';
import AddFavorite from './Components/AddFavorites';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const []

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=9e914884`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if(responseJson.Search) {

        }
        setMovies(responseJson.Search);
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    return (
        <div className='container-fluid movie-app'>
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heeadin='Movies'/>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div>
                <div className='row'>
            <MovieList movies = {movies} favoriteComponent= {AddFavorites} />
          
            </div>
        </div>
    );
};

export default App;