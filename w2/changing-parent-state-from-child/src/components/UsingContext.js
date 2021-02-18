import React, {useContext} from 'react';

import { DumbContext } from './DumbContext'

const UsingContext = () => {
  const msg = useContext(DumbContext);

  return (
    <>
      <h1>{msg}</h1>
    </>
  )
}

export default UsingContext;