import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>Props in Class components <br/>
        Welcome {this.props.name} a.k.a {this.props.hero}<br/>
        {this.props.children}
      </h1>
    );
  }
}

export default Welcome;
