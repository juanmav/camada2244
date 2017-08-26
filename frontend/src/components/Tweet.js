import React from 'react';
import { Link } from 'react-router-dom';

export default class Tweet extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>{this.props.message}</h1>
                <h3>tweet de {this.props.creator.name} {this.props.creator.lastname }</h3>
                <Link to={'/edit/' + this.props._id}> Editar</Link>
                <Link to={'/comment/' + this.props._id}> Comentar</Link>
                <button onClick={() => this.props.removeFn(this.props._id)}>Eliminar </button>
            </div>
        )
    }
}
