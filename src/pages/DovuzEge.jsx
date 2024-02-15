import React from 'react';
import classes from "./DovuzEge.module.css";

const DovuzEge = () => {
  return (
    <div className='window'>
      <div className={classes.flexBlock}>
        <div className={classes.columns}>
          <div className={`${classes.item}`}>Предметы</div>
          <div className={classes.item}>Примечания</div>
        </div>
        <div className={classes.columns}>
          <div className={`${classes.item} ${classes.secondItem}`}>Сроки</div>
          <div className={classes.item}>Расписание</div>
        </div>
        <div className={classes.columns}>
          <div className={`${classes.item} ${classes.thirdItem}`}>Стоимость</div>
          <div className={classes.item}>Формат</div>
        </div>
      </div>
    </div>
  );
};

export default DovuzEge;