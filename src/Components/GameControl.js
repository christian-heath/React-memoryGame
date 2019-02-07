import React from "react";
import Timer from "./Timer";
import "./GameControl.css";
class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.showCountdown = this.showCountdown.bind(this);
    this.state = { buttonClicked: false };
  }
  showCountdown() {
    this.setState({ buttonClicked: true });
  }

  render() {
    const buttonClicked = this.state.buttonClicked;
    let display;
    if (buttonClicked) {
      display = <Timer />;
    }
    else {
      display = <button onClick={this.showCountdown} className="btn btn-success">Click here to start!</button>
    }
    return <div className="flex-container">{display}</div>;
  }
}

export default GameControl;
