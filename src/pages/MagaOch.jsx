import InfoButtonList from "../components/InfoButtonList/InfoButtonList.jsx";
import Header from "../components/UI/Header/Header.jsx";
import AccordionSection from "../components/Accordion/AccordionSection.jsx";
import {activities, facultetCimk, facultetIT, facultetMagOch, facultetMagZaoch} from "../data.js";
import AreasOfTeaching from "../components/AreasOfTeaching/AreasOfTeaching.jsx";
import FacultetPic from "../components/FacultetPic/FacultetPic.jsx";
import classes from "./Facultet.module.css";
import React from "react";


const MagaOch = () => {
  return (
    <>
      <Header
        arrowBack={true}
        contains={['Очная магистратура']}
        id={['facultet']}
        onClick={null}
      />
      <div className={`window ${classes.picture}`} id={classes.picMagOch}>
        <FacultetPic
          header={'Магистратура Очная'}
          description={'Очная магистратура базируется на обучении студентов по 7 направлениям.'}/>
      </div>
      <div className="window noHeightLimit">
        <AccordionSection header='Направления подготовки' infoBlock={facultetMagOch} isAreaTeaching={true}/>
      </div>

    </>
  );
};

export default MagaOch;