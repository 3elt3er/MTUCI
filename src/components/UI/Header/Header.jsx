import { useMemo } from "react";
import classes from "./Header.module.css";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export default function Header({ arrowBack, contains, onClick, id }) {
  const headerText = useMemo(() => {
    // eslint-disable-next-line react/prop-types
    return contains.map((item, index) => (
      <button onClick={() => onClick(id[index])} className={classes.button} key={index}>
        {item}
      </button>
    ));
  }, [contains, onClick]);

  return (
    <header className={classes.header}>
      {arrowBack && (
        <Link to='/' className={classes.button}>
          <img src="./arrowBack.svg" alt="Стрелка назад" />
        </Link>
      )}
      {headerText}
    </header>
  );
}

Header.propTypes = {
  arrowBack: PropTypes.bool.isRequired,
  contains: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired
};