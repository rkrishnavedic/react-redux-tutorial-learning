import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Posts.css';
import {fetchPosts} from '../actions/postActions';

const Posts = ()=>{

    return(
        <div className="post-container">
            <h1>Posts<button onClick={()=>fetchData()} style={{fontSize:'10px'}}>fetch posts</button></h1>
            {
                state.posts.map((value, index)=>{
                    return(
                        <div key={index} className="post-item">
                            <h2>{value.title}</h2>
                            <p>{value.body}</p>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default connect(null, {fetchPosts})(Posts);