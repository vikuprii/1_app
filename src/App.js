import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper" >
                <Header />
                <Navbar state={props.store.getState().sidebar}/>
                <div className='app-wrapper-content' >
                    <Route path='/dialogs' 
                        render={() => (<DialogsConteiner store={props.store} />)} />
                    <Route path='/profile' render={() => 
                        (<Profile store={props.store} />)} />

                </div>
            </div >
        </BrowserRouter>
    );
}

export default App;