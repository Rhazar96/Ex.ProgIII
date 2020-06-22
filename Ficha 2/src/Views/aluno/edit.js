import React, { Component } from 'react';

class EditarAluno extends Component {
    render() {
        let alunoID = this.props.match.params.id;
        return (
            <div class="container">
                <div class="row justify-content-center">
                    <form class="col-10 my-4">
                        <div class="form-group">
                            <label for="nome">Nome</label>
                            <input type="text" class="form-control" name="nome" id="nome" aria-describedby="nomeHelp"></input>
                            <br></br>
                            <label for="email">Email</label>
                            <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp"></input>
                            <br></br>
                            <label for="morada">Morada</label>
                            <input type="text" class="form-control" name="morada" id="morada" aria-describedby="moradaHelp"></input>
                            <br></br>
                            <label for="telemovel">Telemóvel</label>
                            <input type="number" class="form-control" name="telefone" id="telefone" aria-describedby="telefoneHelp"></input>
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={ () => this.criaAluno}>Submeter</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditarAluno;