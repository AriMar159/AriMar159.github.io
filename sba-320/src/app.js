import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from './Components/MovieList';
import SearchBox from './Components/SearchBox';
import AddFavorites from './Components/AddFavorites';
import MovieListHeading from './Components/MovieListHeading';

const App = () => {
    const generateURL = (searchValue) => 
        `http://www.omdbapi.com/?s=${searchValue}&apikey=9e914884`;

    const fetchInitialMovies = async () => {
        try {
            const response = await fetch(generateURL("star wars"));
            const data = await response.json();
            return data.Search || []; // Return an empty array if no movies found
        } catch (error) {
            console.error("Error fetching initial movies:", error);
            return []; // Return empty array on error
        }
    };

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const getInitialMovies = async () => {
            const initialMovies = await fetchInitialMovies();
            setMovies(initialMovies);
        };

        getInitialMovies();
    }, []); // Runs once on mount

    const getMovieRequest = async (searchValue) => {
        if (!searchValue) return; // Prevent unnecessary API calls

        try {
            const response = await fetch(generateURL(searchValue));
            const responseJson = await response.json();

            if (responseJson.Search) {
                setMovies(responseJson.Search);
            } else {
                setMovies([]); // Clear the movies if no results found
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    useEffect(() => {
        if (searchValue) {
            getMovieRequest(searchValue);
        }
    }, [searchValue]);

    const addFavoriteMovie = (movie) => {
        if (!favorites.some(fav => fav.imdbID === movie.imdbID)) {
            setFavorites([...favorites, movie]);
        }
    };

    return (
        <div className='container-fluid movie-app'>
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading='MovieRec' />
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>

            <div className='row mt-4 mb-4 px-3'>
                <MovieList 
                    movies={movies} 
                    handleFavoritesClick={addFavoriteMovie} 
                    favoriteComponent={AddFavorites} 
                />
            </div>

            <div>
                <MovieListHeading heading="Favorites" />
            </div>

            <div className='row'>
                <MovieList 
                    movies={favorites} 
                    handleFavoritesClick={addFavoriteMovie} 
                    favoriteComponent={AddFavorites} 
                />
            </div>
        </div>
    );
};

export default App;
