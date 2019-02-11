import React, { Component } from "react";
import "./Grid.css";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
  randomArray = shuffle(orderedArray);

  render() {
    return (
      <div className="grid">
        <div className="1 box random" />
        <div className="2 box random" />
        <div className="3 box random" />
        <div className="4 box random" />
        <div className="5 box random" />
        <div className="6 box random" />
        <div className="7 box random" />
        <div className="8 box random" />
        <div className="9 box random" />
        <div className="10 box random" />
        <div className="11 box random" />
        <div className="12 box random" />
      </div>
    );
  }
}
export default Grid;
