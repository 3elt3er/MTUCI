import React from 'react';
import classes from './ButtonList.module.css'
import MyButton from "../UI/Button/MyButton.jsx";

const ButtonList = (props) => {
  return (
    <section className={`${classes.buttonGrid2x2} ${props.children.length % 3 === 0 ? classes.buttonGrid3x3 : classes.buttonFlex}`}>
      {props.children.map(item => <MyButton key={item} style={props.style}>{item}</MyButton>)}
    </section>
  );
};

export default ButtonList;