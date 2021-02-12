import React, { useState } from 'react';

function FunctionalComponent() {
  const [state, setState] = useState;

  function changeState() {
    myState = 0;
    setMyState(4);
  }

  function printState() {
    console.log(myState);
  }

  return <h1>Functional Component!</h1>
}

export default FunctionalComponent;