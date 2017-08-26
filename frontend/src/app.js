import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Tweets from './components/Tweets';
import Login from './components/Login';

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
                                <Route path="/" exact={true} component={Tweets}/>
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