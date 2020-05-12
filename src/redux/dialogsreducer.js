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
      return {
        ...state,
        newTextMessage: action.newTextMessage
      };
    case ADD_MESSAGE: {
      let body = state.newTextMessage;
      return {
        ...state,
        newTextMessage: '',
        messages: [...state.messages, {id: 6, message: body}]
      };
    }
    default:
      return state;
  }
}


export default dialogsReducer;