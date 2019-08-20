import React, { Component } from "react";
import "./App.css";
import TodoCol from "./Components/todoCol.js";
import CryptoTrack from "./Components/cryptoTrack.js";
import Weather from "./Components/Weather.js";
import Welcome from "./Components/Welcome.js";
import Calendarr from "./Components/Calendar.js";

class App extends Component {
  // ToDo List
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">React Dashboard</nav>
        <br />
        <br />
        <h4>Dashboard App</h4>
        <br />
        <div className="container">
          <div className="row">
            <Calendarr />
            <Weather />
            <Welcome />
          </div>
          <div className="row">
            <TodoCol />
            <CryptoTrack />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
