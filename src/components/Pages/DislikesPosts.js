import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function DisLikesPosts() {
    const [posts, setposts] = useState()
    useEffect(()=>{
        axios
        .get('https://my-json-server.typicode.com/pankkap/PankajDB/posts')    
        .then(res=>{
            console.log(res.data)
            let data = res.data
            let filteredData = data.filter((post)=>post.likes === false && post.dislikes===true)
            setposts(filteredData)
            console.log(filteredData)
        })
        .catch(err=>console.log(err.message))
    },[])
  return (
    <div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">body</th>
    </tr>
  </thead>
  <tbody>
  {
         posts ? (posts.map((post)=>(
            <tr key={post.id}>
               <td>{post.id}</td>
               <td>{post.title}</td>
               <td>{post.body}</td>
            </tr>
        ))):(null)  
        }
  </tbody>
</table>
    </div>
  )
}
