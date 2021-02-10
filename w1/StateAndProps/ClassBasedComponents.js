import React from 'react';

class ClassBasedComponents {
  constructor(props) {
    super(props);
    this.state = {
      state1: 0,
      state2: "null"
    }
  }

  changeState() {
    this.setState({
      state1: 3
    });
  }

  render() {
    return <h1>Class Based Components</h1>
  }
}