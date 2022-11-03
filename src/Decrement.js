import React from 'react'
import useCounter from './UseCounter'

export default function Decrement() {
  const {counter}=useCounter(-1)
  return (
<div>
<h1> This will decrement after 2 seconds: {counter}</h1>
</div> 
  )
}
