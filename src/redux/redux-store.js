import { createStore, combineReducers } from "redux";
import profileReducer from './pofilereducer'
import dialogsReducer from './dialogsreducer'
import sidebarReducer from './sidebarreducer'
import usersReducer from './usersreducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);




export default store;