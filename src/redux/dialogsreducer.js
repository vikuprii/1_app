const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

export const updateMessageActionCreate = (text) => {
  return { type: UPDATE_MESSAGE, newTextMessage: text }
}

export const addMessageActionCreate = () => {
  return { type: ADD_MESSAGE }
}

let initialState = {
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
}

const dialogsReducer = (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      state.newTextMessage = action.newTextMessage;
      return state;
    case ADD_MESSAGE:
      let newMessage = {
        id: 4,
        message: state.newTextMessage
      }
      state.messages.push(newMessage);
      state.newTextMessage = '';
      return state;
    default:
      return state;
  }
}


export default dialogsReducer;