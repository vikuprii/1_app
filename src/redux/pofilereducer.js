const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE_POST';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, haw are you?', likesCount: 12 },
    { id: 2, message: 'Hello', likesCount: 11 }],
  newTextPost: 'none none'
};

const profileReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let body = state.newTextPost;
      return {
        ...state,
        posts: [...state.posts, {id: 5, message: body, likesCount: 0}],
        newTextPost: ''
      };
    }
    case UPDATE_POST: {
      return {
        ...state,
        newTextPost: action.newTextPost
      };
    }
    default:
      return state;
  }
}

export const addPostActionCreate = () => {
  return { type: ADD_POST }
}

export const updatePostActionCreate = (text) => {
  return { type: UPDATE_POST, newTextPost: text }
}
export default profileReducer;