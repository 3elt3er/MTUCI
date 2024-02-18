import InfoButtonList from "../components/InfoButtonList/InfoButtonList.jsx";
import Header from "../components/UI/Header/Header.jsx";
import AccordionSection from "../components/Accordion/AccordionSection.jsx";
import {
  activities,
  averageQA,
  budget,
  deadlines, deferment,
  documentsQA, formats, hostel, numbers,
  otherSubmission, professionalEducation,
  rules,
  strategy, supplyUniversity,
  workPriem
} from "../data.js";

const Numbers = () => {
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
        contains={['Справочник по номерам']}
        id={['first']}
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
        <AccordionSection infoBlock={numbers} header='Номера отделов' isAreaTeaching={false}/>
      </div>
    </>
  );
};

export default Numbers;