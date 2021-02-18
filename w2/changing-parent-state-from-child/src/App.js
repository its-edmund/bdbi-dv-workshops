import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ParentComponent from './components/ParentComponent';
import MapFunctionComponent from './components/MapFunctionComponent';
import MapFunctionComponentStyled from './components/MapFunctionComponentStyled/MapFunctionComponentStyled';
import UsingContext from './components/UsingContext'
import { DumbContext } from './components/DumbContext'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ParentComponent />
        </Route>
        <Route path="/mapfunction">
          <MapFunctionComponent />
        </Route>
        <Route path="/mapfunctionstyled">
          <MapFunctionComponentStyled />
        </Route>
        <Route path="/context">
          <DumbContext.Provider value="hello!">
            <UsingContext />
          </DumbContext.Provider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
