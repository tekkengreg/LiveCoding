import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'

import { incrementCounter } from "./actions/index"
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Counter plus :  {this.props.counter}
        </p>
        <p className="App-intro">
          Counter moins : {this.props.counterdecrease}
        </p>
        <button onClick={() => (this.props.toto(2, Math.random() > 0.5))}>increment</button>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return ({
    counter: state.counter,
    counterdecrease: state.counterdecrease,
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toto: incrementCounter
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
