import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="search__div">
          <div className="card">
            <h1>Pesquisar</h1>
            <input id="search" type="text" className="form-control" placeholder="Digite o nome de um usuário" required/>
          </div>
        </div>
      </div>
    ); 
  }
}

export default App;
