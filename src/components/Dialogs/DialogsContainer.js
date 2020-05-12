import React from 'react';
import { updateMessageActionCreate, addMessageActionCreate } from '../../redux/dialogsreducer';
import Dialogs from './Dialogs'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: (text) => {
      dispatch(updateMessageActionCreate(text))
    },
    addMessage: () => {
      dispatch(addMessageActionCreate())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer
