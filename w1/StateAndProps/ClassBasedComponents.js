import React, { Component } from 'react';

class ClassBasedComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state1: 0,
      state2: "null"
    }
  }

  changeState() {
    this.setState({
      state1: 3,
      state3: true
    });
  }

  printState() {
    console.log(this.state.state1);
  }

  render() {
    return <h1>Class Based Components</h1>
  }
}

export default ClassBasedComponents;