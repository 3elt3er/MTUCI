import InfoButtonList from "../components/InfoButtonList/InfoButtonList.jsx";
import Header from "../components/UI/Header/Header.jsx";
import AccordionSection from "../components/Accordion/AccordionSection.jsx";
import {
  activities,
  averageQA,
  budget,
  deadlines, documentsPadiQA,
  documentsQA, otherPaid,
  otherSubmission, prices,
  rules,
  strategy, targetedTraining,
  workPriem
} from "../data.js";

const PaidTraining = () => {
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
        contains={['Общие вопросы', 'По оплате', 'По документам', 'Целевое обучение']}
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
        <AccordionSection infoBlock={otherPaid} header='Общие вопросы (в т.ч. сроки)' isAreaTeaching={false}/>
      </div>
      <div className="window noHeightLimit" id='second'>
        <AccordionSection infoBlock={prices} header='Вопросы по оплате/стоимости обучения' isAreaTeaching={false}/>
      </div>
      <div className="window noHeightLimit" id='third'>
        <AccordionSection infoBlock={documentsPadiQA} header='Вопросы по документам' isAreaTeaching={false}/>
      </div>
      <div className="window noHeightLimit" id='fourth'>
        <AccordionSection infoBlock={targetedTraining} header='Целевое обучение' isAreaTeaching={false}/>
      </div>
    </>
  );
};

export default PaidTraining;