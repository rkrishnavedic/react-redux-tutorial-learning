import React, { useState } from 'react';
import { Provider } from 'react-redux';
import {store} from '../app/store';
import './Posts.css';

const PostForm = ()=>{

    const [newPost, setNewPost] = useState({
        title: '',
        body:''
    });

    const handleSubmit=()=>{
        console.log(newPost);
    }

    return (
        <Provider store={store}>
            <div className="post-container">
                <div className="form">
                    <div className="flex-div">
                    <input onChange={(e)=> setNewPost({...newPost, title: e.target.value})} placeholder="post title"/>
                    <button onClick={handleSubmit}>submit</button>
                    </div>
                    <textarea onChange={(e)=> setNewPost({...newPost, body: e.target.value})} placeholder="type here..."/>
                </div>
            </div>
        </Provider>
    )
}

export default PostForm;