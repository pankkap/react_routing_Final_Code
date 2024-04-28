import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1 className='text-primary'>Home Page</h1>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1713458109759-a71efed71e4d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="apartment" />
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1713458109759-a71efed71e4d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="apartment" />
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1713458109759-a71efed71e4d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="apartment" />
    </div>
  </div>
</div>
            <Link className="btn btn-primary" to="/contact">Know More About Me</Link>
    </div>
  )
}
