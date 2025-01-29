import React, { useState, useEffect } from 'react';
import MovieList from './Components/MovieList';

const App = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.example.com/movies')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    return (
        <div>
            <MovieList movies={movies} />
        </div>
    );
};

export default App;