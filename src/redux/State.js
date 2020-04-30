//let rerenderEntireTree = () => {
//  console.log('State changed'); }

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE_POST';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

let store = {

  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, haw are you?', likesCount: 12 },
        { id: 2, message: 'Hello', likesCount: 11 }],
      newTextPost: 'none none'
    },
    dialogsPage: {
      messages: [
        { id: 1, message: 'Hi111111111111' },
        { id: 2, message: 'Hi Yi' },
        { id: 3, message: 'Yo' }],
      newTextMessage: '',
      dialogs: [
        { id: 1, name: 'Dmitry' },
        { id: 2, name: 'Anna' },
        { id: 3, name: 'Ivan' }]
    },
    navbarfr: {
      frends: [
        { id: 1, name: 'Kiril' },
        { id: 2, name: 'Max' },
        { id: 3, name: 'Boris' }]
    }
  },

  getState() {
    return this._state;
  },

  callSubscriber() {
    console.log('State changed');
  },

  subscribe(observer) {
    debugger;
    this.callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newTextPost,
        likesCount: 0
      }
      debugger;
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newTextPost = '';
      this.callSubscriber(this._state);
      debugger;
    } else if (action.type === UPDATE_POST) {
      this._state.profilePage.newTextPost = action.newTextPost;
      this.callSubscriber(this._state);
    } else if (action.type === UPDATE_MESSAGE) {
      this._state.dialogsPage.newTextMessage = action.newTextMessage;
      this.callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      debugger;
        let newMessage = {
        id: 4,
        message: this._state.dialogsPage.newTextMessage
      }
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newTextMessage = '';
      debugger;
      this.callSubscriber(this._state);
    }


  }
}

export const addPostActionCreate = () => {
  return { type: ADD_POST }
}

export const updatePostActionCreate = (text) => {
  return { type: UPDATE_POST, newTextPost: text }
}

export const updateMessageActionCreate = (text) => {
  return { type: UPDATE_MESSAGE, newTextMessage: text }
}

export const addMessageActionCreate = () => {
  return { type: ADD_MESSAGE }
}

window.store = store;

export default store;