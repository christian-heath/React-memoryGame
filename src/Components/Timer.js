import React, { Component } from "react";
import "./Timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 3
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      time: this.state.time - 1
    });
  }
  render() {
    return (
      <div className="timer">
        <h3>Get ready to memorize cells in {this.state.time}</h3>
      </div>
    );
  }
}

export default Timer;
