// AreasOfTeaching.jsx
import React from 'react';
import ButtonList from "../ButtonList/ButtonList.jsx";
import classes from "./AreasOfTeaching.module.css";

const AreasOfTeaching = () => {
  const whiteButtonStyles = {
    color: 'white',
    border: '1px solid white'
  };

  return (
    <div className={classes.flexBox}>
      <div className={classes.areasOfTeaching}>
        <h2>Очный бакалавриат</h2>
        <ButtonList style={whiteButtonStyles} children={['ИТ', 'КиИБ', "Рит", "СиСС", "ЦЭиМК"]}/>
      </div>
      <div className={classes.areasOfTeaching}>
        <h2>Заочный бакалавриат</h2>
        <ButtonList style={whiteButtonStyles} children={['Заочное', 'Ускоренное ', "Очно-заочное "]}/>
      </div>
      <div className={classes.areasOfTeaching}>
        <h2>Магистратура</h2>
        <ButtonList style={whiteButtonStyles} children={['Заочное', 'Ускоренное ', "Очно-заочное "]}/>
      </div>
    </div>
  );
};

export default AreasOfTeaching;
