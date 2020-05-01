import { createStore, combineReducers } from "redux";
import profileReducer from './pofilereducer'
import dialogsReducer from './dialogsreducer'
import sidebarReducer from './sidebarreducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer

})

let store = createStore(reducers);




export default store;