import React from 'react';
import classes from './ButtonList.module.css'
import MyButton from "../UI/Button/MyButton.jsx";

const ButtonList = (props) => {
  return (
    <section className={`${props.children.length % 2 === 0 ? classes.buttonGrid2x2 : null} ${props.children.length % 3 === 0 ? classes.buttonGrid3x3 : null} ${props.children.length % 5 === 0 ? classes.buttonFlex : null} `}>
      {props.children.map(({text, to}) =>
        <MyButton to={to} key={text} style={props.style}>{text}</MyButton>
      )}
    </section>
  );
};

export default ButtonList;