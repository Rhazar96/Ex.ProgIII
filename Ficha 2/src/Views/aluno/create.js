import React, { Component } from 'react';

class NovoAluno extends Component {
    render() {
        return (
            <div class="container">
                <div class="row justify-content-center">
                    <form class="col-10 my-4">
                        <div class="form-group">
                            <label for="nome">Nome</label>
                            <input type="text" class="form-control" name="nome" id="nome" aria-describedby="nomeHelp"></input>
                            <label for="email">Email</label>
                            <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp"></input>
                            <label for="morada">Morada</label>
                            <input type="text" class="form-control" name="morada" id="morada" aria-describedby="moradaHelp"></input>
                            <label for="telefone">Telefone</label>
                            <input type="number" class="form-control" name="telefone" id="telefone" aria-describedby="telefoneHelp"></input>
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={ () => this.criaAluno}>Submeter</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NovoAluno;