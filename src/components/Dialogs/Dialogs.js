import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateMessageActionCreate, addMessageActionCreate } from '../../redux/State';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = props.state.messages.map(m => <Message message={m.message} />);

  let newMessage = React.createRef();

  let updateMessage = (e) => {
    let text = e.target.value;
    props.dispatch(updateMessageActionCreate(text));

  }

  let addMessage = () => {
    debugger;
    props.dispatch(addMessageActionCreate());
  }

  //let text = newMessage.current.value;

  return (

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea placeholder='Enter yor message' 
                      onChange={updateMessage} 
                      value={props.state.newTextMessage} />
          </div>
          <div>
            <button onClick={addMessage}>Send message</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dialogs;
