import Header from "../components/UI/Header/Header.jsx";
import AccordionSection from "../components/Accordion/AccordionSection.jsx";
import {documentsQA, otherSubmission, rules, workPriem} from "../data.js";

const SubmissionPage = () => {
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
        contains={['Работа ПК', 'Документы', 'Прием 2024', 'Подача']}
        id={['workPK', 'documents', 'rules', 'process']}
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
      <div className="window noHeightLimit" id='workPK'>
        <AccordionSection infoBlock={workPriem} header='Работа приемной комиссии' isAreaTeaching={false}/>
      </div>
      <div className="window noHeightLimit" id='documents'>
        <AccordionSection infoBlock={documentsQA} header='Вопросы по документам' isAreaTeaching={false}/>
      </div>
      <div className="window noHeightLimit" id='rules'>
        <AccordionSection infoBlock={rules} header='Правила приема 2004' isAreaTeaching={false}/>
      </div>
      <div className="window noHeightLimit" id='process'>
        <AccordionSection infoBlock={otherSubmission} header='Процесс поступления и другое' isAreaTeaching={false}/>
      </div>
    </>
  );
};

export default SubmissionPage;