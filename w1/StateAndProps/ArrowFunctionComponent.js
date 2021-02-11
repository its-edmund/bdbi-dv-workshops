import React, { useState } from 'react';

const FunctionalComponent = (props) => {
  const [myState, setMyState] = useState(2);

  const changeState = () => {
    setMyState(4);
  }

  const printState = () => {
    console.log(myState);
  }

  return <h1>Functional Components</h1>
}

export default FunctionalComponent;