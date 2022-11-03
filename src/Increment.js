import React from 'react'
import useCounter from './UseCounter.js';



export default function Increment() {
  const {counter}=useCounter(0)

  return (
    <div>
<h1>This will increment after 3 second: {counter}</h1>
    </div>
  )
}
