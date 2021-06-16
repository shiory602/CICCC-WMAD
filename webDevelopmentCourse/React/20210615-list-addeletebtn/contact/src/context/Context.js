import React from 'react';

const UserContext = React.createContext();

export default class UserContextProvider extends React.Component {
    state = {
        userData: [],
        users: [
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

    fetchUserData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            this.setState({userData: json});
            console.log(this.state.userData);
        })
        .catch((erro) => {
            console.log(`this is a error ${erro}`);
        });
    }

    componentDidMount() {
        this.fetchUserData();
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                { this.props.children }
            </UserContext.Provider>
        )
    }
}

export const UserContextConsumer = UserContext.Consumer;