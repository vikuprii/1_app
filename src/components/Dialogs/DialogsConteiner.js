import React from 'react';
import { updateMessageActionCreate, addMessageActionCreate } from '../../redux/dialogsreducer';
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext';

const DialogsConteiner = () => {

  return (
    <StoreContext.Consumer> 
      {
      (store) => {

        let updateMessage = (text) => {
          store.dispatch(updateMessageActionCreate(text));
        }
      
        let addMessage = () => {
          store.dispatch(addMessageActionCreate());
        }
      
      return <Dialogs addMessage={addMessage} 
                      updateMessage={updateMessage} 
                      dialogsPage={store.getState().dialogsPage} />}
}
</StoreContext.Consumer>
  )
}

export default DialogsConteiner
