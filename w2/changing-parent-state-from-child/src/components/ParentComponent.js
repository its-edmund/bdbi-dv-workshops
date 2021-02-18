import React, {useState} from 'react';

import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [displayCity, setDisplayCity] = useState("Nowhere");

  const handleClick = (city) => {
    setDisplayCity(city);
  }

  return (
    <>
      <h1>{displayCity}</h1>
      <ChildComponent callback={handleClick} />
    </>
    
  )
}

export default ParentComponent;