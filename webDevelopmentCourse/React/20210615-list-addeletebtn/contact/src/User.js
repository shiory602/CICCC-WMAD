import React from 'react';
import { UserContextConsumer } from './context/Context';

export default class User extends React.Component {
    render() {
        return (
            <UserContextConsumer>
            {(value) => {
                return(
                    <>
                    <h1>User list</h1>
                    <ul style={{listStyle: 'none'}}>
                        {value.userData.map(user => (
                            <li key={user.id}>
                                <p>Name: {user.name}</p>
                                <p>Name: {user.name}</p>
                                <p>Name: {user.name}</p>
                            </li>
                        ))}
                    </ul>
                </>
                )
            }}
            </UserContextConsumer>
        );
    }
}

