import React from 'react';
import s from "./Friend.module.css"
import { NavLink, Link } from 'react-router-dom';

const Friend = (props) => {
  let path = "/friend/" + props.id;
  return (
    <span className={s.frend}>
       <NavLink to={path}>{props.name}</NavLink>
    </span>
  );
}

export default Friend;
