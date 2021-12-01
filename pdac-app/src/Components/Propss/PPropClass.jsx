import React, { Component } from "react";
import { CPropClass } from "./CPropClass";
export class PPropClass extends Component {
  constructor() {//Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super(); //To use this keyword in this class, super constructor is must.
    this.state={
        name:"Chetan",
        age:32
    }
  }
  render() {
    return (
      <div>
        <h2>This is Parent Class</h2>
        <h2>Hello {this.state.name}</h2>
        <h2>Age is {this.state.age}</h2>
        <CPropClass var1={this.state.name} var2={this.state.age}/>
      </div>
    );
  }
}
