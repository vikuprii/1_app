import React, { createRef } from 'react';
import s from "./Myposts.module.css"
import Post from './Post/Post';
import {addPostActionCreate, updatePostActionCreate} from '../../../redux/State';

const Myposts = (props) => {

  let postElements = 
      props.posts.map (post => <Post message={post.message} likesCount={post.likesCount} />);

  let newPostElement=React.createRef ();

  let addPost = () => {
    props.dispatch ( addPostActionCreate() );
       //props.addPost();
    //newPostElement.current.value = '';
    
  }

  let updatePost = () => {
    let text = newPostElement.current.value;
    props.dispatch (updatePostActionCreate(text));
    //props.updatePost(text);
  }

  return (
    <div className={s.postsBlock}>
       <div> 
        <h3>My posts</h3>
          <div><textarea ref={newPostElement} 
                         onChange={updatePost} 
                         value={props.newTextPost} /></div>
          <div><button onClick={addPost}>Add post</button></div>
        </div>
         <div className={s.posts}>
         { postElements }
        </div>
    </div>
  );
}

export default Myposts;
