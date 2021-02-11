import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import Ticker from './components/Counter';

class App extends Component {
  render() {
    return (
      <Container>
        <Ticker />
      </Container>
    );
  }
}

export default App;