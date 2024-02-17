import InfoButtonList from "../components/InfoButtonList/InfoButtonList.jsx";
import Header from "../components/UI/Header/Header.jsx";
import AccordionSection from "../components/Accordion/AccordionSection.jsx";
import {activities, facultetCimk, facultetIT, facultetMagOch, facultetMagZaoch, facultetZaoch} from "../data.js";
import AreasOfTeaching from "../components/AreasOfTeaching/AreasOfTeaching.jsx";
import FacultetPic from "../components/FacultetPic/FacultetPic.jsx";
import classes from "./Facultet.module.css";
import React from "react";


const FacultetZaoch = () => {
  return (
    <>
      <Header
        arrowBack={true}
        contains={['Заочный бакалавриат']}
        id={['facultet']}
        onClick={null}
      />
      <div className={`window ${classes.picture}`} id={classes.picZaoch}>
        <FacultetPic
          header={'Заочный бакалавриат (ЦЗОПБ)'}
          description={'Заочный бакалавриат предполагает обучение по 4 направлениям в разных областях. Преимуществом нашего заочного обучения является наличие бюджетных мест.'}/>
      </div>
      <div className="window noHeightLimit">
        <AccordionSection header='Направления подготовки' infoBlock={facultetZaoch} isAreaTeaching={true}/>
      </div>

    </>
  );
};

export default FacultetZaoch;