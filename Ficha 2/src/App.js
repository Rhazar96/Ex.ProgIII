import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListaAlunos from './Views/aluno/list';
import NovoAluno from './Views/aluno/create';
import EditarAluno from './Views/aluno/edit';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={ListaAlunos}/>
        <Route path="/create" component={NovoAluno}/>
        <Route path="/edit/:id" component={EditarAluno}/>
      </div>
    </Router>
  );
}

export default App;