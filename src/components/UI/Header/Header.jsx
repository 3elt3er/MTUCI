import {useEffect, useState, useMemo} from "react";
import classes from "./Header.module.css";

export default function Header({...props}) {
  const headerText = useMemo(() => {
    return props.contains.map(item => <button className={classes.button} key={item}>{item}</button>)
  }, [props])
  return (
    <header className={classes.header}>
      {
        props.arrowBack ? <button className={classes.button}><img className={classes.arrow} src="./arrowBack.png" alt="Стрелка назад"/></button> : console.log('Нет стрелки')
      }
      {headerText}
    </header>
  )
}
