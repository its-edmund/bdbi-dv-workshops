import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import styles from './Ticker.module.css';

class Ticker extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  tickUp = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div className={styles.ticker}>
        <h1>{`Current Count: ${this.state.count}`}</h1>
        <Button onClick={this.tickUp}>Add To Counter</Button>
      </div>
    )
  }
}

export default Ticker;