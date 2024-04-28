import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddPosts() {
  const navigate = useNavigate()
    const [newPost, setnewPost] = useState({
        title:"",
        body:"",        
        latest:true,
        oldest:false,
        likes:false,
        dislikes:false
    })
    function addPost(){
        // console.log(newPost)
        axios
          .post('https://my-json-server.typicode.com/pankkap/PankajDB/posts', newPost)
          .then(()=>{
            alert("New Post Created Successfully")
            navigate('/posts/latest')
          }) 
          .catch(err=>console.log(err.message))
    }
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12"><h2 className='text-center text-primary '>Add New Post</h2></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <label htmlFor="">Title</label>
          <input type="text" placeholder='Enter Post Title' className='form-control' onChange={(e)=>setnewPost({...newPost, title:e.target.value})}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <label htmlFor="">Body</label>
          <input type="text" placeholder='Enter Post Body' className='form-control' onChange={(e)=>setnewPost({...newPost, body:e.target.value})}/>
        </div>
      </div>
      <button className='btn btn-primary mt-3' onClick={addPost}>Create New Post</button>
    </div>
  )
}
