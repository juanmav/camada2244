import React from 'react';
import Tweet from './Tweet';

export default class Tweets extends React.Component {
    constructor(){
        super();
        this.state = {
            tweets : []
        }
    }

    componentWillMount(){
       this.load();
    }

    load = () => {
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
    };

    removeTweet = (_id) => {
        console.log('Borrar tweet id:' + _id);
        let token = JSON.parse(localStorage.getItem('login')).token;
        fetch('http://localhost:8000/tweets/' + _id,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            },
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(result => {
                alert('Borrado con Exito! Apreta F5');
                //this.load();

                let updatedList = this.state.tweets.filter( t => t._id != _id);
                this.setState({ tweets: updatedList});
            })
    };

    render(){
        return (
            <div>
                {
                    this.state.tweets.map( (t, index )=> {
                        return (
                           <Tweet key={index} {...t} removeFn={this.removeTweet}/>
                        )
                    })
                }
            </div>
        )
    }
}