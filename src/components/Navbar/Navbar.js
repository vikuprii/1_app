import React from 'react';
import s from "./Navbar.module.css"
import { NavLink } from 'react-router-dom';
import FriendsContainer from './Friends/FriendsContainer';

const Navbar = (props) => {
  return (
    <div>
    <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink></div>
        <div className={`${s.item} ${s.active}`}>
          <NavLink to='/Dialogs' activeClassName={s.active}>Messagese</NavLink></div>
        <div className={s.item}><a>News</a></div>
        <div className={s.item}><a>Music</a></div>
        <div className={s.item}><a>Settings</a></div>
    </nav>
    <nav className={s.nav}>
      <FriendsContainer />
    </nav>
    </div>
  );
}

export default Navbar;
