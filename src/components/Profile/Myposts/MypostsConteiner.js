import React, { createRef } from 'react';
import { addPostActionCreate, updatePostActionCreate } from '../../../redux/pofilereducer';
import Myposts from './Myposts';

const MypostsConteiner = (props) => {
let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreate());
    //props.addPost();
    //newPostElement.current.value = '';

  }

  let onPostChange = (text) => {
    props.store.dispatch(updatePostActionCreate(text));
    //props.updatePost(text);
  }

  return (
    <Myposts updatePost={onPostChange} 
             addPost={addPost} 
             posts={state.profilePage.posts} 
             newTextPost={state.profilePage.newTextPost}/>
  );
}

export default MypostsConteiner;
