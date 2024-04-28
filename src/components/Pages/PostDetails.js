import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function PostDetails() {
    let {id}  = useParams()
    const [post, setpost] = useState()
    useEffect(()=>{
        axios
        .get(`https://my-json-server.typicode.com/pankkap/PankajDB/posts/${id}`)
        .then(res=>setpost(res.data))
        .catch(err=>console.log(err))
    },[])
      return (
    <div>
      <h1 className='text-primary'>Post Details</h1>
      <div className="row">
        <div className="col-md-12">
            <table className='table table-bordered table-stripped'>
                <tbody>
                    <tr>
                        <th>Image:</th> <td><img className='rounded-circle' src="https://picsum.photos/80" alt="lorem" /></td>
                    </tr>
                    <tr>
                        <th>Id:</th> <td>{post?.id}</td>
                    </tr>
                    <tr>
                        <th>Title:</th> <td>{post?.title}</td>
                    </tr>
                    <tr>
                        <th>Body:</th> <td>{post?.body}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}
