import { useMemo } from "react";
import classes from "./Header.module.css";

// eslint-disable-next-line react/prop-types
export default function Header({ arrowBack, contains, onClick, id }) {
  const headerText = useMemo(() => {
    // eslint-disable-next-line react/prop-types
    return contains.map((item, index) => (
      <button onClick={() => onClick(id[index])} className={classes.button} key={item}>
        {item}
      </button>
    ));
  }, [contains, onClick]);

  return (
    <header className={classes.header}>
      {arrowBack && (
        <button className={classes.button}>
          <img className={classes.arrow} src="./arrowBack.png" alt="Стрелка назад" />
        </button>
      )}
      {headerText}
    </header>
  );
}
