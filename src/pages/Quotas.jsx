import InfoButtonList from "../components/InfoButtonList/InfoButtonList.jsx";
import Header from "../components/UI/Header/Header.jsx";
import AccordionSection from "../components/Accordion/AccordionSection.jsx";
import {
  activities, armyVolonID, averageID,
  averageQA, averageQuotas,
  budget,
  deadlines,
  documentsQA, invalid, olympID,
  otherSubmission, quotasLnrDnr,
  rules, sportID,
  strategy, svo,
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
        contains={['Общие', 'Инвалиды', 'СВО', 'ЛНР ДНР']}
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
      <div className="window noHeightLimit noLimitMarginTop" id='first'>
        <AccordionSection infoBlock={averageQuotas} header='Общие вопросы' isAreaTeaching={false}/>
      </div>
      <div className="window noHeightLimit" id='second'>
        <AccordionSection infoBlock={invalid} header='Люди с повышенными потребностями' isAreaTeaching={false}/>
      </div>
      <div className="window noHeightLimit" id='third'>
        <AccordionSection infoBlock={svo} header='Участники и дети участников СВО' isAreaTeaching={false}/>
      </div>
      <div className="window noHeightLimit" id='fourth'>
        <AccordionSection infoBlock={quotasLnrDnr} header='Поступление из присоедененных территорий' isAreaTeaching={false}/>
      </div>
    </>
  );
};

export default IndividualAchievements;