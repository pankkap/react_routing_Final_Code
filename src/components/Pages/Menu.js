import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Menu() {
  const params = useParams()
  const [role, setrole] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
    let user_role = sessionStorage.getItem("role")
    setrole(user_role)
    console.log(role)
  },[params])

  function logoutProcess()
  {
      sessionStorage.removeItem("role")
      alert("Logout Successfully")
      navigate('/login')
  }

  return (
   
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">React Project</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       {
        role ?( 
          role == "Author"?(
            <>
    <li className="nav-item">
          <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/allposts">All Posts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/posts">Posts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/addpost">Add Posts</Link>
        </li>
          <button className="btn btn-sm btn-secondary" onClick={logoutProcess}>Logout</button>
            </>
          ):(
            <>
            <li className="nav-item">
          <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/allposts">All Posts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/posts">Posts</Link>
        </li>
        
          <button className="btn btn-sm btn-secondary" onClick={logoutProcess}>Logout</button>
        
            </>
          )
      
      ):(
        <Link to="/login">Login</Link>
      )
       }
      </ul>
   </div>
  </div>
</nav>
</div>
  )
}
