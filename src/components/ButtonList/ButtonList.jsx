import React from 'react';
import classes from './ButtonList.module.css'
import MyButton from "../UI/Button/MyButton.jsx";

const ButtonList = (props) => {
  return (
    <section className={`${classes.buttonGrid2x2} ${props.children.length % 2 !== 0 ? classes.buttonGrid3x3 : ''}`}>
      {props.children.map(item => <MyButton key={item}>{item}</MyButton>)}
    </section>
  );
};

export default ButtonList;