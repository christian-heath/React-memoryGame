import React, { Component } from "react";
import "./Timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount;
    this.componentWillUnmount = this.componentWillUnmount;
    this.tick = this.tick;
    this.state = {
      time: 3,
      hidden: false,
      startGame: false
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    this.setState({ hidden: true });
    this.setState({ startGame: true });
  }

  tick() {
    if (this.state.time == 1) {
      this.componentWillUnmount();
    } else {
      this.setState({
        time: this.state.time - 1
      });
    }
  }
  render() {
    const hidden = this.state.hidden;
    let display;
    if (hidden) {
      display = <div />;
    } else {
      display = <h3>Get ready to memorize cells in {this.state.time}</h3>;
    }
    return <div className="timer">{display}</div>;
  }
}

export default Timer;
