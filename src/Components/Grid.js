import React, { Component } from "react";
import "./Grid.css";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="grid">
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
      </div>
    );
  }
}
export default Grid;
