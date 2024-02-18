import InfoButtonList from "../components/InfoButtonList/InfoButtonList.jsx";
import Header from "../components/UI/Header/Header.jsx";
import AccordionSection from "../components/Accordion/AccordionSection.jsx";
import {activities, facultetIT, facultetKiib} from "../data.js";
import AreasOfTeaching from "../components/AreasOfTeaching/AreasOfTeaching.jsx";
import FacultetPic from "../components/FacultetPic/FacultetPic.jsx";
import classes from "./Facultet.module.css";
import React from "react";


const FacultetKiib = () => {
  return (
    <>
      <Header
        arrowBack={true}
        contains={['Факультет КиИБ']}
        id={['facultet']}
        onClick={null}
      />
      <div className={`window ${classes.picture}`} id={classes.picKiib}>
        <FacultetPic
          header={'Факультет "Кибернетика и информационная безопасность(КиИБ)"'}
          description={'Кибернетика и Информационная безопасность (КиИБ) - На этом факультете осуществляется подготовка профессионалов по направлениям в сфере интеллектуальных киберсистем и информационной безопасности. В составе факультета : киберполигон МТУСИ ( первый в России киберполигон с возможностью анализа атак на системах квантового распределения ключей на базе решений ГК «ИнфоТеКС», обновляющийся в режиме реального времени, центр Лаборатории Касперского, лаборатория «Код безопасности», центр "Робототехники KUKA". Студент получает прикладные знания в области информационной безопасности, т.к. обучение включает практику в лабораториях главных компаний в сфере инф.без.'}/>
      </div>
      <div className="window noHeightLimit">
        <AccordionSection header='Направления подготовки' infoBlock={facultetKiib} isAreaTeaching={true}/>
      </div>

    </>
  );
};

export default FacultetKiib;