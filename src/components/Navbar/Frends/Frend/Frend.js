import React from 'react';
import s from "./Frend.module.css"
import { NavLink, Link } from 'react-router-dom';

const Frend = (props) => {
  let path = "/frend/" + props.id;
  return (
    <span className={s.frend}>
       <NavLink to={path}>{props.name}</NavLink>
    </span>
  );
}

export default Frend;
