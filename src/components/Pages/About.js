import React from 'react'
import Counter from '../Counter'

export default function About() {
  return (
    <div>
      <h1 className='text-primary'>About Page</h1>
      <div className="row">
        <div className="col-md-4  border border-2"><Counter value={5}/></div>
        <div className="col-md-4 border border-2"><Counter value={15}/></div>
        <div className="col-md-4 border border-2"><Counter value={25}/></div>
      </div>
    </div>
  )
}
