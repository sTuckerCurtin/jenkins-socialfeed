import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';
import Navigation from './Components/Navigation/Navigation';
import './App.css';

function App() {
  const [posts, setPosts] = useState([{name: 'David Lagrange', body: `I recently went into the woods to search for the oldest tree I could find. To my luck I 
  found a very old hemlock around 200 - 250 years old. Let me know if you would like 
  me to show it to you!`, liked: 0}]);

  function addNewPost(newPost){
    let tempPosts = [...posts, newPost];
    setPosts(tempPosts);
  }

  return (
    <div>
      <Navigation />
      <div className='grid-rules-app' style={{'background-color': '#e2f2ee'}}>
        <CreatePost addNewPost={addNewPost} />
        <DisplayPosts posts={posts} />
      </div>
    </div>
  );
}

export default App;
