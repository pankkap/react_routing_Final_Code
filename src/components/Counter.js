import React, { useState } from 'react'

export default function Counter(props) {
    const [counter, setcounter] = useState(props.value)
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button className='btn btn-primary' onClick={()=>setcounter(prev=>prev+1)}>+</button>
    </div>
  )
}
