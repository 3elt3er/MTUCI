// AreasOfTeaching.jsx
import React from 'react';
import ButtonList from "../ButtonList/ButtonList.jsx";
import classes from "./AreasOfTeaching.module.css";

const AreasOfTeaching = () => {
  const buttonsData = [
    { text: 'ИТ', to: '/facultet-it' },
    { text: 'КиИБ', to: '/facultet-kiib' },
    { text: 'Рит', to: '/facultet-rit' },
    { text: 'СиСС', to: '/facultet-sis' },
    { text: 'ЦЭиМК', to: '/facultet-cimk' },
  ];
  const secondButtonsData = [
    { text: 'Заочное', to: '/facultet-zaochniy' },
    { text: 'Ускоренное', to: '/facultet-fast-zaochniy' },
    { text: 'Очно-заочное', to: '/facultet-ochno-zaochniy' },
  ];
  const thirdButtonsData = [
    { text: 'Заочное', to: '/facultet-magistratura-ochno' },
    { text: 'Ускоренное', to: '/facultet-magistratura-zaochno' },
    { text: 'Очно-заочное', to: '/facultet-magistratura-ochno-zaochno' },
  ];


  const whiteButtonStyles = {
    color: 'white',
    border: '1px solid white'
  };

  return (
    <div className={classes.flexBox}>
      <div className={classes.areasOfTeaching}>
        <h2>Очный бакалавриат</h2>
        <ButtonList style={whiteButtonStyles} children={buttonsData}/>
      </div>
      <div className={classes.areasOfTeaching}>
        <h2>Заочный бакалавриат</h2>
        <ButtonList style={whiteButtonStyles} children={secondButtonsData}/>
      </div>
      <div className={classes.areasOfTeaching}>
        <h2>Магистратура</h2>
        <ButtonList style={whiteButtonStyles} children={thirdButtonsData}/>
      </div>
    </div>
  );
};

export default AreasOfTeaching;
