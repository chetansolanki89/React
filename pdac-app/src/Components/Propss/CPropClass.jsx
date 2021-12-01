import React, { Component } from "react";
export class CPropClass extends Component {
//   constructor() {
//     super();
//   }
  render() {
    return (
      <div>
        <h2>This is Child Class</h2>
        <h3>Data from Parent Class: {this.props.var1} and {this.props.var2}</h3>
      </div>
    );
  }
}
