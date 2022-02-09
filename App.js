import logo from './logo.svg';
import './App.css';
import React, {useState , useEffect} from 'react';
import Post  from './Post';
import {db} from './firebase';


function App() {
  const [posts, setPosts] = useState([
    {username:"haris",
    caption: "wow",
  imageUrl:""}
  ]);

  useEffect (() => {
    db.collection('Posts').onSnapshot (snapshot)
// every time a new post added this fires
  setPosts(snapshot.docs.map(doc => doc.data()))}, [])
  return (
    <div className="App">

     <div className= "app-header">
       <img
       className ="app_headerImage"
       src= "C:\Users\Administrator.DESKTOP-FUV38L6\insta-clone\public\logo192.png"
       alt = "Instagram"
       />
     </div>
     <h1> Hi</h1>
     {
       posts.map(post => (
         <Post username ={post.username} caption= {post.caption} imageUrl ={post.imageUrl} />
       )
       )
        

     }
     
     
    </div>
  );
}

export default App;

