import React, { Component } from "react";
import Grid from "./Components/Grid";
import GameControl from "./Components/GameControl";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className="header">Memory Game</h1>
        <Grid />
        <GameControl buttonClicked={false} beginGame={false} />
      </div>
    );
  }
}

export default App;
