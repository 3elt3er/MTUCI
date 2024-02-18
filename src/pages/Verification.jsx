import React from 'react';
import Header from "../components/UI/Header/Header.jsx";
import AccordionSection from "../components/Accordion/AccordionSection.jsx";
import { questionVerification } from "../data.js";

const Verification = () => {
  const executeScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Header
        arrowBack={true}
        contains={['Верификация']}
        id={['verification']}
        onClick={executeScroll}
      />
      <div className="window noHeightLimit" id='verification'>
        <AccordionSection infoBlock={questionVerification} header='Вопросы для верификации' isAreaTeaching={false}/>
      </div>
    </div>
  );
};

export default Verification;