import profileReducer from './pofilereducer'
import dialogsReducer from './dialogsreducer'

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
        { id: 3, name: 'Ivan' },
        { id: 4, name: 'Boris' }]
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
    this._state.profilePage = profileReducer (this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action);
    this.callSubscriber(this._state);
  }
}

export default store;