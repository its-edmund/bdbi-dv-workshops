import React from 'react';

import ArrowFunctionComponent from './ArrowFunctionComponent.js'
import FunctionalComponent from './FunctionalComponents'
import ClassBasedComponent from './ClassBasedComponents'

const App = () => {
  return (
    <>
      <FunctionalComponent />
      <ClassBasedComponent />
    </>
  );
}