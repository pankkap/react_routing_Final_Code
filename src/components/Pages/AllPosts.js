import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function AllPosts() {
    const [posts, setposts] = useState()
    useEffect(()=>{
        axios
        .get('https://my-json-server.typicode.com/pankkap/PankajDB/posts')    
        .then(res=>setposts(res.data))
        .catch(err=>console.log(err.message))
    },[])

  return (
    <div>
        <h1 className='text-primary'>List of Posts</h1>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
    </tr>
  </thead>
  <tbody>
  {
         posts ? (posts.map((post)=>(
            <tr key={post.id}>
                <td><Link to={`/allposts/${post.id}`}>{post.id}</Link></td>
                <td>{post.title}</td>
            </tr>
        ))):(null)  
        }
  </tbody>
</table>

    </div>
  )
}
