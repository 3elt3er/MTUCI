import classes from "./MyButton.module.css";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const MyButton = ({to, children, style}) => {
    return (
        <Link to={to} className={classes.button} style={style}>
            {children}
        </Link>
    );
};

MyButton.propTypes = {
    children: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    style: PropTypes.object, // Необязательное свойство стиля
};

export default MyButton;