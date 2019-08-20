import React from "react";
import "./App.css";
import TodoCol from "./Components/todoCol.js";
import CryptoTrack from "./Components/cryptoTrack.js";
import Weather from "./Components/Weather.js";
import Welcome from "./Components/Welcome.js";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">React Dashboard</nav>
      <br />
      <br />
      <h4>Dashboard App</h4>
      <br />
      <div className="container">
        <div className="row">
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

export default App;
