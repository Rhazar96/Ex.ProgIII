import React, { Component } from 'react';

class MovieList extends Component {

    render() {
        const detalhe = "Este é o meu primeiro filme favorito";
        return <div>
            <h1> Lista de Filmes - Ordem cronológica </h1>
            <Detalhe title='John Wick' value={detalhe} />
        </div>
    }

}

function Detalhe(props) {
    return <p>{props.value} - {props.title}</p>;
}


export default MovieList;