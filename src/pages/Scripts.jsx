import React from 'react';
import Header from "../components/UI/Header/Header.jsx";
import AccordionSection from "../components/Accordion/AccordionSection.jsx";
import {activities, scripts} from "../data.js";

const Scripts = () => {
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
        contains={['Скрипты для разговора']}
        id={['scripts']}
        onClick={executeScroll}
      />
      <div className="window noHeightLimit" id='scripts'>
        <AccordionSection infoBlock={scripts} header='Скрипты для разговора' isAreaTeaching={false}/>
      </div>
    </div>
  );
};

export default Scripts;