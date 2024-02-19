import Header from "../components/UI/Header/Header.jsx";
import AccordionSection from "../components/Accordion/AccordionSection.jsx";
import {activities, formats, professionalEducation, supplyUniversity} from "../data.js";

const Activities = () => {


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
        contains={['Форматы обучения', 'Меры поддержки', 'Профессиональное развитие', 'Внеучебные активности']}
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
        <AccordionSection infoBlock={formats} header='Форматы обучения' isAreaTeaching={false}/>
      </div>
      <div className="window noHeightLimit" id='second'>
        <AccordionSection infoBlock={supplyUniversity} header='Меры поддержки от унивирситета' isAreaTeaching={false}/>
      </div>
      <div className="window noHeightLimit" id='third'>
        <AccordionSection infoBlock={professionalEducation} header='Профессиональное развитие' isAreaTeaching={false}/>
      </div>
      <div className="window noHeightLimit" id='fourth'>
        <AccordionSection infoBlock={activities} header='Внеучебные активности' isAreaTeaching={false}/>
      </div>
    </>
  );
};

export default Activities;