import React from 'react';
import classes from "./MyButton.module.css";

const MyButton = ({children, style}) => {
    return (
        <button className={classes.button} style={style}>
            {children}
        </button>
    );
};

export default MyButton;