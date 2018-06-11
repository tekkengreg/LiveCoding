import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 1,
    }
  }
  handleClick = ()=>{
    // this.setState({
    //   counter: this.state.counter+1
    // })
    const action = {
      type: "INCREMENT",
      increment : 2
    }
    this.props.dispatch(action)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.props.counter}
        </p>
        <button onClick={()=>(this.handleClick())}>increment</button>
      </div>
    );
  }
};

function mapStateToProps(state){
  return({
    counter: state.counter
  })
}

export default connect(mapStateToProps)(App);
