import InfoButtonList from "../components/InfoButtonList/InfoButtonList.jsx";
import Header from "../components/UI/Header/Header.jsx";
import AccordionSection from "../components/Accordion/AccordionSection.jsx";
import {
  activities,
  facultetCimk,
  facultetIT,
  facultetMagOch,
  facultetMagZaoch,
  facultetOchnoZaoch,
  facultetZaoch
} from "../data.js";
import AreasOfTeaching from "../components/AreasOfTeaching/AreasOfTeaching.jsx";
import FacultetPic from "../components/FacultetPic/FacultetPic.jsx";
import classes from "./Facultet.module.css";
import React from "react";


const FacultetOchZaoch = () => {
  return (
    <>
      <Header
        arrowBack={true}
        contains={['Очно-заочный бакалавриат']}
        id={['facultet']}
        onClick={null}
      />
      <div className={`window ${classes.picture}`} id={classes.picOchZaoch}>
        <FacultetPic
          header={'Очно-заочный бакалавриат (ЦИО)'}
          description={'Очно-заочный бакалавриат предполагает обучение по 1 направлению. Обучение проходит по вечерам 3-4 раза в неделю.'}/>
      </div>
      <div className="window noHeightLimit">
        <AccordionSection header='Направления подготовки' infoBlock={facultetOchnoZaoch} isAreaTeaching={true}/>
      </div>

    </>
  );
};

export default FacultetOchZaoch;