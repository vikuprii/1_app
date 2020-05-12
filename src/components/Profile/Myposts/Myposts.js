import React, { createRef } from 'react';
import s from "./Myposts.module.css"
import Post from './Post/Post';

const Myposts = (props) => {

  let postElements = 
      props.posts.map (post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />);

  let newPostElement=React.createRef ();

  let onAddPost = () => {
    //props.dispatch ( addPostActionCreate() );
    props.addPost();
    //newPostElement.current.value = '';
    
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatePost(text);
  }

  return (
    <div className={s.postsBlock}>
       <div> 
        <h3>My posts</h3>
          <div><textarea ref={newPostElement} 
                         onChange={onPostChange} 
                         value={props.newTextPost} /></div>
          <div><button onClick={onAddPost}>Add post</button></div>
        </div>
         <div className={s.posts}>
         { postElements }
        </div>
    </div>
  );
}

export default Myposts;
