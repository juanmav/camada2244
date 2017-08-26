import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Tweets from './components/Tweets';
import Login from './components/Login';
import TweetCreator from './components/TweetCreator';

class App extends React.Component{

    constructor(props){
        super(props);
    }

    componentWillMount(){
        let login = localStorage.getItem('login');
        if (login){
            login = JSON.parse(login);
        }
        this.setState({login});
    }

    render(){
        return(
            <div>
                Mi Trabajo Final
                {
                    this.state.login ?
                        <Router>
                            <div>
                                <ul>
                                   <li><Link to="/create"> Crear un Tweet!</Link></li>
                                </ul>
                                <div>
                                    <Route path="/" exact={true} component={Tweets}/>
                                    <Route path="/create" exact={true} component={TweetCreator}/>
                                    <Route path="/edit/:id" exact={true} render={({match}) => {
                                        return <TweetCreator tweetId={match.params.id}/>
                                    }} />

                                </div>
                            </div>
                        </Router>
                        :
                        <Router>
                            <div>
                                <Route path="/" exact={true} component={Login} />
                            </div>
                        </Router>

                }
            </div>
        )
    }
}

render(<App/>, document.getElementById('root'));