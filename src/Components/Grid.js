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
  orderedArray = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve"
  ];
  randomArray = this.shuffle(this.orderedArray);

  randomizeClass() {
    let className = "box " + this.randomArray[this.randomArray.length - 1];
    this.randomArray.pop();
    return className;
  }

  render() {
    let className = "box ";
    className += this.randomArray[0];

    return (
      <div className="grid">
        <div className={this.randomizeClass()} />
        <div className={this.randomizeClass()} />
        <div className={this.randomizeClass()} />
        <div className={this.randomizeClass()} />
        <div className={this.randomizeClass()} />
        <div className={this.randomizeClass()} />
        <div className={this.randomizeClass()} />
        <div className={this.randomizeClass()} />
        <div className={this.randomizeClass()} />
        <div className={this.randomizeClass()} />
        <div className={this.randomizeClass()} />
        <div className={this.randomizeClass()} />
      </div>
    );
  }
}
export default Grid;
