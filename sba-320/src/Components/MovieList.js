import React from 'react';

const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent;
    return (
        <>
            {props.movies.map((movie, index)=> (
                <div className='col-md-3 col-sm-6 mb-4'>
                <img src={movie.Poster} alt='movie'></img>
                <div 
                onClick={ () => props.handleFavoritesClick (movie)}
                className ='overlay d-flex align-items-center justify-content-center'>
                    <FavoriteComponent />
                </div>
                </div>
        ))}
        
        </>
    );
};

export default MovieList;