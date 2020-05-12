import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);
  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />);

  let onUpdateMessage = (e) => {
    let text = e.target.value;
    props.updateMessage(text);
  }

  let onAddMessage = () => {
    props.addMessage();
  }

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
              onChange={onUpdateMessage}
              value={props.dialogsPage.newTextMessage} />
          </div>
          <div>
            <button onClick={onAddMessage}>Send message</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dialogs;
