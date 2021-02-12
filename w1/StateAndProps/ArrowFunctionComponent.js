import React, { useState } from 'react';

const ArrowFunctionComponent = (props) => {
  const [myState, setMyState] = useState(2);

  const changeState = () => {
    myState = 0;
    setMyState(4);
  }

  const printState = () => {
    console.log(myState);
  }

  return <h1>Arrow Function Components</h1>
}

export default ArrowFunctionComponent;