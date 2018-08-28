import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
import Content from './components/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">bryanchua.com</h1>
          <Menu />
        </header>
        <Content />
        <p className="App-intro">
          Hello World. Under Construction.
        </p>
      </div>
    );
  }
}

export default App;
