import React from 'react';

export default class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsername = (event) => {
        this.setState({ username: event.target.value})
    };

    handlePassword = (event) => {
        this.setState({ password: event.target.value})
    };

    login = () => {
        let user = {
            username: this.state.username,
            password: this.state.password
        };

        console.log(user);

        fetch('http://localhost:8000/login', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                localStorage.setItem('login', JSON.stringify(result));
                window.location.href = '/';
            })
            .catch(err => console.log(err));
    };

    render(){
        return (
            <div>
                <label>Username: </label>
                <input onChange={this.handleUsername} value={this.state.username}/>
                <label>password:</label>
                <input onChange={this.handlePassword} value={this.state.password}/>
                <br/>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}