import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function LatestPosts() {
    const [posts, setposts] = useState()
    useEffect(()=>{
        getPosts();
    },[])

    function getPosts (){
        console.log("GetPosts Called")
        axios
        .get('https://my-json-server.typicode.com/pankkap/PankajDB/posts')    
        .then(res=>{
            console.log(res.data)
            let data = res.data
            let filteredData = data.filter((post)=>post.latest === true && post.oldest===false)
            setposts(filteredData)
            console.log(filteredData)
        })
        .catch(err=>console.log(err.message))
    }
    function likePost(post){
        post.oldest = true;
        post.latest = false;
        post.likes = true;
        post.dislikes = false; 

        axios
        .put(`https://my-json-server.typicode.com/pankkap/PankajDB/posts/${post.id}`, post)
        .then(()=>{
            getPosts();
        })
        .catch(err=>console.log(err))
    }

    function dislikePost(post){
        post.oldest = true;
        post.latest = false;
        post.likes = false;
        post.dislikes = true; 

        axios
        .put(`https://my-json-server.typicode.com/pankkap/PankajDB/posts/${post.id}`, post)
        .then(()=>{
            getPosts();
        })
        .catch(err=>console.log(err))
    }

  return (
    <div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">body</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {
         posts ? (posts.map((post)=>(
            <tr key={post.id}>
               <td>{post.id}</td>
               <td>{post.title}</td>
               <td>{post.body}</td>
               <td><i className="btn btn-success bi bi-hand-thumbs-up-fill" onClick={()=>likePost(post)}></i></td>
               <td><i className="btn btn-danger bi bi-hand-thumbs-down-fill" onClick={()=>dislikePost(post)}></i></td>
            </tr>
        ))):(null)  
        }
  </tbody>
</table>
    </div>
  )
}
