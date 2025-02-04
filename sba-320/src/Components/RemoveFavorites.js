import React from 'react';

const RemoveFavorites = () => {
    return (
        <>
            <span className="mr-2">Remove from Favorites</span>
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-x-circle"
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M6.293 5.293a1 1 0 011.414 0L8 5.586l.293-.293a1 1 0 111.414 1.414L9.414 7l.293.293a1 1 0 01-1.414 1.414L8 8.414l-.293.293a1 1 0 01-1.414-1.414L6.586 7l-.293-.293a1 1 0 010-1.414z" />
                <path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1 8a7 7 0 1114 0A7 7 0 011 8z" />
            </svg>
        </>
    );
};

export default RemoveFavorites;
