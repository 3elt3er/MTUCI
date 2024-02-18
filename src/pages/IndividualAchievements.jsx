import InfoButtonList from "../components/InfoButtonList/InfoButtonList.jsx";
import Header from "../components/UI/Header/Header.jsx";
import AccordionSection from "../components/Accordion/AccordionSection.jsx";
import {
  activities, armyVolonID, averageID,
  averageQA,
  budget,
  deadlines,
  documentsQA, olympID,
  otherSubmission,
  rules, sportID,
  strategy,
  workPriem
} from "../data.js";

const IndividualAchievements = () => {
  const executeScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }; // dublirovanie func
  return (
    <>
      <Header
        arrowBack={true}
        contains={['Общие', 'Спорт', 'Олимпиады', 'Другие ИД']}
        id={['first', 'second', 'third', 'fourth']}
        onClick={executeScroll}
      />
      {/*<div className="window">*/}
      {/*  <InfoButtonList*/}
      {/*    infoHeader='Вопросы по подаче документов'*/}
      {/*    infoText='А также работе приемной комиссии'*/}
      {/*  >*/}
      {/*    {['Работа приемной комиссии', 'Вопросы по документам', 'Правила приема 2023', 'Процесс подачи документов']}*/}
      {/*  </InfoButtonList>*/}
      {/*</div>*/}
      <div className="window noHeightLimit" id='first'>
        <AccordionSection infoBlock={averageID} header='Общие вопросы' isAreaTeaching={false}/>
      </div>
      <div className="window noHeightLimit" id='second'>
        <AccordionSection infoBlock={sportID} header='Спортивные достижения' isAreaTeaching={false}/>
      </div>
      <div className="window noHeightLimit" id='third'>
        <AccordionSection infoBlock={olympID} header='Олимпиады и конкурсы' isAreaTeaching={false}/>
      </div>
      <div className="window noHeightLimit" id='fourth'>
        <AccordionSection infoBlock={armyVolonID} header='Другие ИД' isAreaTeaching={false}/>
      </div>
    </>
  );
};

export default IndividualAchievements;