import React from 'react';
import s from "./Frends.module.css"
import { NavLink } from 'react-router-dom';
import Frend from './Frend/Frend';

const Frends = (props) => {
  let frends = props.state.map( fr => <Frend name={fr.name} id={fr.id} /> );
  return (
    <div>
      <h1>Frends</h1>
      { frends }
    </div>
  );
}

export default Frends;
