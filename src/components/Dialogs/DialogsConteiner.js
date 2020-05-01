import React from 'react';
import { updateMessageActionCreate, addMessageActionCreate } from '../../redux/dialogsreducer';
import Dialogs from './Dialogs'

const DialogsConteiner = (props) => {

  let updateMessage = (text) => {
    props.store.dispatch(updateMessageActionCreate(text));
  }

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreate());
  }

  return (<Dialogs addMessage={addMessage} 
                   updateMessage={updateMessage} 
                   dialogsPage={props.store.getState().dialogsPage} />);
}

export default DialogsConteiner;
