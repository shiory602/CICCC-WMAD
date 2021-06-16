import React from 'react';

const MovieContext = React.createContext();

export default class MovieContextProvider extends React.Component {
    state = {
        movieData: [],
        movies: [
            {
                id: '1',
                title: 'Titanic'
            },
            {
                id: '2',
                title: 'Hello Kitty'
            },
            {
                id: '3',
                title: 'Mario'
            },
        ]
    }

    fetchMovieData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            this.setState({movieData: json});
            console.log(this.state.movieData);
        })
        .catch((erro) => {
            console.log(`this is a error ${erro}`);
        });
    }

    componentDidMount() {
        this.fetchMovieData();
    }

    render() {
        return (
            <MovieContext.Provider value={this.state}>
                { this.props.children }
            </MovieContext.Provider>
        )
    }
}

export const MovieContextConsumer = MovieContext.Consumer;