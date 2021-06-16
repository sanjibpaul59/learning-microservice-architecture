import React from 'react';
import PostCreate from './components/PostCreate';
import PostsList from './components/PostsList';

const App = () => {
    return (
        <div className="container">
            <h1>Create Post</h1>
            <PostCreate/>
            <hr></hr>
            <h1>Posts</h1>
            <PostsList/>
        </div>
    )
}
export default App;