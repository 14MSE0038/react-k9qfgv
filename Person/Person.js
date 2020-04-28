
import React from 'react';
import classes from './Person.module.css';
// import Radium from 'radium';

const person=(props)=>{
  
  return(
    // <div className="output">
    <div className={classes.Output}>
    <p onClick={props.click}>Hi i am {props.Username} my {props.age} age older </p>
    <p>{props.children}</p>
    <input type="text"  onChange={props.changed} value={props.Username}/>
    </div>
    // <div></div>
  );
};
// export default Radium(person);
export default person;
//props.children is used to get value in between the tags.