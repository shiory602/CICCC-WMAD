import React from 'react';
import { MovieContextConsumer } from './context/Context';

export default class Movie extends React.Component {
    render() {
        return (
            <MovieContextConsumer>
            {(value) => {
                return(
                    <>
                    <h1>Movie list</h1>
                    <ul style={{listStyle: 'none'}}>
                        {value.movieData.map(movie => (
                            <li key={movie.id}>Title: {movie.name}</li>
                        ))}
                    </ul>
                </>
                )
            }}
            </MovieContextConsumer>
        );
    }
}

