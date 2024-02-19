import Header from "../components/UI/Header/Header.jsx";
import AccordionSection from "../components/Accordion/AccordionSection.jsx";
import {hostel} from "../data.js";

const Hostel = () => {
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
        contains={['Вопросы по общежитию']}
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
      <div className="window noHeightLimit" id='first'>
        <AccordionSection infoBlock={hostel} header='Вопросы по общежитию' isAreaTeaching={false}/>
      </div>
    </>
  );
};

export default Hostel;