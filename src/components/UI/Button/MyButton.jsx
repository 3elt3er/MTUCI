import React from 'react';
import classes from "./MyButton.module.css";
import { Link } from 'react-router-dom';

const MyButton = ({to, children, style}) => {
    return (
        <Link to={to} className={classes.button} style={style}>
            {children}
        </Link>
    );
};

export default MyButton;