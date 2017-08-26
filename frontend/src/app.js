import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Router, Link } from 'react-router-dom';

class App extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                Hola mundo, soy un componente de REACTJS!
            </div>
        )
    }
}

render(<App/>, document.getElementById('root'));