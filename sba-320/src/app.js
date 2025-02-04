import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from './Components/MovieList';
import SearchBox from './Components/SearchBox';
import AddFavorites from './Components/AddFavorites';
import RemoveFavorites from './Components/RemoveFavorites';
import MovieListHeading from './Components/MovieListHeading';

const App = () => {
    const generateURL = (searchValue) => 
        `http://www.omdbapi.com/?s=${searchValue}&apikey=9e914884`;



    const fetchInitialMovies = async () => {
        try {
            const response = await fetch(generateURL("star wars"));
            const data = await response.json();
            return data.Search || []; // Return empty array if no movies found
        } catch (error) {
            console.error("Error fetching initial movies:", error);
            return [];
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
    }, []);

    const getMovieRequest = async (searchValue) => {
        if (!searchValue) return;

        try {
            const response = await fetch(generateURL(searchValue));
            const responseJson = await response.json();

            if (responseJson.Search) {
                setMovies(responseJson.Search);
            } else {
                setMovies([]);
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

    const removeFavoriteMovie = (movie) => {
        const updatedFavorites = favorites.filter(fav => fav.imdbID !== movie.imdbID);
        setFavorites(updatedFavorites);
    };

    return (
        <div className='container-fluid movie-app'>
          
            <div className='row'>
                <MovieListHeading heading='MovieRec' />
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className="header-container">
            <img src="/images/header.jpg" alt= "Movie App Header" className="header-image"/>
           </div>

            <div className='row g-3'>
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
                    handleFavoritesClick={removeFavoriteMovie} 
                    favoriteComponent={RemoveFavorites} 
                />
            </div>
        </div>
    );
};

export default App;

