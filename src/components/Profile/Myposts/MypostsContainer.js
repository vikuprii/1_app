import React, { createRef } from 'react';
import { addPostActionCreate, updatePostActionCreate } from '../../../redux/pofilereducer';
import Myposts from './Myposts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newTextPost: state.profilePage.newTextPost
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreate());
    },
    updatePost: (text) => {
      dispatch(updatePostActionCreate(text));
    }
    
  }
}

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MypostsContainer;
