import React from 'react';
import classes from './InfoButtonList.module.css'
import ButtonList from "../ButtonList/ButtonList.jsx";

const InfoButtonList = ({infoHeader, infoText, children}) => {
  return (
    <section className={classes.infoButton}>
      <div className={classes.infoBlock}>
        <div className={classes.infoHeader}>
          {infoHeader}
        </div>
        <div className={classes.infoText}>
          {infoText}
        </div>
      </div>
      <ButtonList children={children}/>
    </section>
  );
};

export default InfoButtonList;