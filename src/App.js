import React from 'react';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/postform';

function App() {
  return (
    <div>
        <PostForm/>
        <Posts/>
    </div>
  );
}

export default App;
