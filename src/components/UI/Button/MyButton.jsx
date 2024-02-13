import React from 'react';
import classes from "./MyButton.module.css";

const MyButton = ({children}) => {
    return (
        <button className={classes.button}>
            {children}
        </button>
    );
};

export default MyButton;