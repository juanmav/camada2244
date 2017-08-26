import React from 'react';

export default class Tweets extends React.Component {
    constructor(){
        super();
        this.state = {
            tweets : []
        }
    }

    componentWillMount(){
        let token = JSON.parse(localStorage.getItem('login')).token;

        fetch('http://localhost:8000/tweets',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            },
            method: 'GET',
        })
            .then(response => response.json())
            .then(tweets => this.setState({tweets}));
    }

    render(){
        return (
            <div>
                {
                    this.state.tweets.map( t => {
                        return (
                            <div>
                                <h1>{t.message}</h1>
                                <h3>tweet de {t.creator.name} {t.creator.lastname }</h3>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}