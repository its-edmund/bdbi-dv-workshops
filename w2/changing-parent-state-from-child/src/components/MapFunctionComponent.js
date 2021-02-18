import React from 'react';

const data = [
  {
    title: "Camry",
    price: 10000
  },
  {
    title: "Ferrari",
    price: 700000
  },
  {
    title: "Porsche",
    price: 200000
  },
  {
    title: "Subaru",
    price: 30000
  },
  {
    title: "BMW",
    price: 100000
  },
]

const MapFunctionComponent = () => {
  return (
    <>
      {data.map((car, i) => {
        return (
          <>
            <h1>Car {i + 1}: {car.title}</h1>
            <h2>Price: {car.price}</h2>
          </>
        )
      })}
    </>
  )
}

export default MapFunctionComponent;