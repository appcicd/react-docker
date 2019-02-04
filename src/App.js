import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Docker</h1>
        </header>
        <p className="App-intro">Containerized React Feature</p>
      </div>
    );
  }
}

export default App;
