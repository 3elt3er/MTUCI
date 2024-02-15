import InfoButtonList from "../components/InfoButtonList/InfoButtonList.jsx";
import Header from "../components/UI/Header/Header.jsx";
import AccordionSection from "../components/Accordion/AccordionSection.jsx";
import {activities} from "../data.js";

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
        contains={['Работа ПК', 'Документы', 'Прием 2023', 'Подача']}
        id={['workPK', 'documents', 'admission', 'supply']}
        onClick={executeScroll}
      />
      <div className="window">
        <InfoButtonList
          infoHeader='Вопросы по подаче документов'
          infoText='А также работе приемной комиссии'
        >
          {['Работа приемной комиссии', 'Вопросы по документам', 'Правила приема 2023', 'Процесс подачи документов']}
        </InfoButtonList>
      </div>
      <div className="window noHeightLimit" id='workPK'>
        <AccordionSection infoBlock={activities} header='Работа приемной комиссии' isAreaTeaching={false}/>
      </div>
      <div className="window noHeightLimit" id='documents'>
        <AccordionSection infoBlock={activities} header='Работа приемной комиссии' isAreaTeaching={false}/>
      </div>
    </>
  );
};

export default SubmissionPage;