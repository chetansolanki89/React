import React, { Component } from "react";

class LifeCycleMethodsChild extends Component {
  constructor() {
    super();
    console.log("This is Constructor Child."); // 1
  }
  static getDerivedStateFromProps(props, state) {
    console.log("This is getDerivedStateFromProps Child."); //2
  }
  componentDidMount() {
    console.log("This is componentDidMount Child."); //4
  }
  componentDidUpdate() {
    console.log("This is componentDidUpdate Child.");
  }
  shouldComponentUpdate() {
    console.log("This is shouldComponentUpdate Child.");
    return false;
  }
  getSnapshotBeforeUpdate() {
    console.log("This is getSnapshotBeforeUpdate Child.");
  }
  render() {
    console.log("This is Render Child."); //3
    return (
      <div>
        <h1>Life cycle Methods Child</h1>
      </div>
    );
  }
}

export default LifeCycleMethodsChild;
