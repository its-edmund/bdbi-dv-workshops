import React, {useEffect, useState} from 'react';

const ChildComponent = (props) => {
  const [city, setCity] = useState("Nowhere");

  useEffect(() => {
    props.callback(city)
  }, [city]);

  const handleClick = (e) => {
    setCity(e.target.outerText);
    // props.callback(e.target.outerText);
  }

  return (
    <>
      <button onClick={handleClick}>Atlanta</button>
      <button onClick={handleClick}>Boston</button>
      <button onClick={handleClick}>San Francisco</button>
    </>
  )
}

export default ChildComponent;