import React, { Component } from "react";
import "./Grid.css";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.orderedArray = [];
  }
  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  orderedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  randomArray = this.shuffle(this.orderedArray);

  render() {
    let className = "box ";
    for (var i = 0; i < this.randomArray.length / 2; i++) {
      className += "random " + this.randomArray[i];
    }

    return (
      <div className="grid">
        <div className={className} />
        <div className={className} />
        <div className={className} />
        <div className={className} />
        <div className="5 box" />
        <div className="6 box " />
        <div className="7 box " />
        <div className="8 box " />
        <div className="9 box " />
        <div className="10 box " />
        <div className="11 box" />
        <div className="12 box " />
      </div>
    );
  }
}
export default Grid;
