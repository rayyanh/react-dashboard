import React from "react";
import "./App.css";
import TodoCol from "./Components/todoCol.js";
import CryptoTrack from "./Components/cryptoTrack.js";

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
          <CryptoTrack />
          <TodoCol />
        </div>
      </div>
    </div>
  );
}

export default App;
