import React from 'react';

export default class TweetCreator extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tweet: {
              message: ''
            },
            isEdit: this.props.tweetId ? true : false
        };
    }


    componentWillMount() {
        if (this.state.isEdit) {
            let token = JSON.parse(localStorage.getItem('login')).token;

            fetch('http://localhost:8000/tweets/' + this.props.tweetId, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': token
                },
                method: 'GET',
            })
                .then(response => response.json())
                .then(tweet => this.setState({tweet}));
        } else {
            // No hago nada.
        }
    }


    handleMessage = (event) => {
        let data = this.state.tweet;
        data.message = event.target.value;
        this.setState({tweet: data});
    };

    save = () => {
        let tweet = this.state.tweet;
        let token = JSON.parse(localStorage.getItem('login')).token;

        let endpoint = 'http://localhost:8000/tweets/' + (this.state.isEdit ? this.props.tweetId : '');

        console.log(endpoint);

        fetch(endpoint, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            },
            method: this.state.isEdit ? 'PUT' : 'POST',
            body: JSON.stringify(tweet)
        })
            .then( response => response.json())
            .then( result => window.location.href = '/')
            .catch( err => alert('No se pudo generar!'))
    };

    render(){
        return (
            <div>
                <label>Mensaje!</label>
                <input value={this.state.tweet.message} onChange={this.handleMessage}/>
                <button onClick={this.save}>Crear!</button>
            </div>
        )
    }
}