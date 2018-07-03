import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router';

import  {withRouter} from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      home: "",
      api: "",
    }
    fetch("/")
      .then(response => response.text())
      .then(response => {
        console.log(response)
        this.setState({ home: response })
      })
    fetch("/api")
      .then(response => response.text())
      .then(response => {
        console.log(response)
        this.setState({ api: response })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Switch>
          <Route exact path="/" render={() => (<p>home vaut : {this.state.home}</p>)} />
          <Route path="/api" render={() => (<p>api vaut : {this.state.api}</p>)} />
          </Switch>

      </div>
    );
  }
}

export default withRouter(App);
