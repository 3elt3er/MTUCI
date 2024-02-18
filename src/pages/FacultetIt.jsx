import InfoButtonList from "../components/InfoButtonList/InfoButtonList.jsx";
import Header from "../components/UI/Header/Header.jsx";
import AccordionSection from "../components/Accordion/AccordionSection.jsx";
import {activities, facultetIT} from "../data.js";
import AreasOfTeaching from "../components/AreasOfTeaching/AreasOfTeaching.jsx";
import FacultetPic from "../components/FacultetPic/FacultetPic.jsx";
import classes from "./Facultet.module.css";
import React, {useEffect} from "react";


const FacultetIt = () => {
  return (
    <>
      <Header
        arrowBack={true}
        contains={['Факультет ИТ']}
        id={['']}
        onClick={null}
      />
      <div className={`window ${classes.picture}`} id={classes.picIt}>
        <FacultetPic
          header={'Факультет "Информационные технологии"'}
          description={'Факультет ИТ базируется на трековом развитии студентов, это значит, что студенты имеют ' +
            'возможность выбирать специализацию и глубоко изучать темы, наиболее интересующие их, т.е. вместо обычных ' +
            'курсовых работ студенты выполняют кейсы/проекты от реальных работодателей, что повышает конкурентноспособность ' +
            'выпускника с данного факультета. На факультете успешно функционируют такие Центры перспективных технологий, как : ' +
            'Центр Искусственного интеллекта, Учебная лаборатория 3D моделирования, центр 1С, Лаборатория разработки мобильных приложений. Студенты данного факультета активно проходят стажировки в крупнейших компаниях.'}/>
      </div>
      <div className="window noHeightLimit">
        <AccordionSection header='Направления подготовки' infoBlock={facultetIT} isAreaTeaching={true}/>
      </div>

    </>
  );
};

export default FacultetIt;