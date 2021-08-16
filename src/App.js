import axios from 'axios';
import React, { Component } from 'react';
import './index.css';
import Navbar from './Navbar.js';
import Profile from './Profile.js';
import Repo from './Repo.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      github: {
        url: "https://api.github.com/users",
        client_id: "7dec19952b348440f399",
        client_secret: "fc9dbfb32f2a8f4ad148d783fc8f443ba774fb07",
        count: 15,
        sort: "created: asc"
      },
      user: [],
      repos: []
    };
  }

  getUser = (e) => {
    const user = e.target.value;

      const { url, client_id, client_secret, count, sort } = this.state.github;
      axios.get(
        `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
      ).then(({data}) => this.setState({ user: data }));
      axios.get(
        `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`
      ).then(({data}) => this.setState({ repos: data }));
    };
    
    renderProfile = () => {
      const { user, repos } = this.state;
      return (
        <div className="row">
          <div className="col-md-4">
            <Profile user={user} />
          </div>
          <div className="col-md-8">
           {repos.map(repo => <Repo key={repo.name} repo={repo} />)}
          </div>
        </div>
      )
    };
    
    render() {
      return (
        <div className="App">
          <Navbar />

          <div className="search__div">
            <div className="search__card">
              <h1>Pesquisar</h1>
              <input onChange={this.getUser} id="search" type="text" className="form-control" placeholder="Digite o nome de um usuário" required/>
            </div>
            <br/>
              {this.state.user.length !== 0 ? this.renderProfile() : null}
          </div>
        </div>
    ); 
  }
}

export default App;
