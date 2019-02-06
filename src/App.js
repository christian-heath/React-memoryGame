import React, { Component } from "react";
import Grid from "./Components/Grid";
import Timer from "./Components/Timer";
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
        <div className="flex-container">
          <button className="btn btn-success">Click here to start!</button>
          <Timer />
        </div>
      </div>
    );
  }
}

export default App;
