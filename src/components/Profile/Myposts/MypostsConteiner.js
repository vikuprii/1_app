import React, { createRef } from 'react';
import { addPostActionCreate, updatePostActionCreate } from '../../../redux/pofilereducer';
import Myposts from './Myposts';
import StoreContext from '../../../StoreContext';

const MypostsConteiner = () => {

  return (
    <StoreContext.Consumer> 
      {
      (store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreate());
          //props.addPost();
          //newPostElement.current.value = '';

        }

        let onPostChange = (text) => {
          store.dispatch(updatePostActionCreate(text));
          //props.updatePost(text);
        }
        return <Myposts updatePost={onPostChange}
          addPost={addPost}
          posts={store.getState().profilePage.posts}
          newTextPost={store.getState().profilePage.newTextPost} />
      }
    }
    </StoreContext.Consumer>
  )
    
}

export default MypostsConteiner;
