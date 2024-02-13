import './index.css'
import InfoButtonList from "./components/InfoButtonList/InfoButtonList";
import Header from "./components/UI/Header/Header.jsx";
import CardSection from "./components/CardSection/CardSection.jsx";
import MyFooter from "./components/UI/Footer/MyFooter.jsx";
import AccordionSection from "./components/Accordion/AccordionSection.jsx";
import {activities, facultetIT} from "./data.js";
import AreasTeaching from "./components/Accordion/AreasTeaching/AreasTeaching.jsx";
import AccordionItem from "./components/Accordion/AccordionItem.jsx";
import FacultetPic from "./components/FacultetPic/FacultetPic.jsx";
import ButtonList from "./components/ButtonList/ButtonList.jsx";
import classes from "./components/FacultetPic/FacultetPic.module.css";
import React from "react";

function App() {
  return (
    <div className="App">


        {/*<FacultetPic facultet={'../../public/facultetCimk.svg'} header='Факультет “Информационные технологии” (ИТ)' description='Факультет ИТ базируется на трековом развитии студентов, это значит, что студенты имеют возможность выбирать специализацию и глубоко изучать темы, наиболее интересующие их, т.е. вместо обычных курсовых работ студенты выполняют кейсы/проекты от реальных работодателей, что повышает конкурентноспособность выпускника с данного факультета. На факультете успешно функционируют такие Центры перспективных технологий, как : Центр Искусственного интеллекта, Учебная лаборатория 3D моделирования, центр 1С, Лаборатория разработки мобильных приложений. Студенты данного факультета активно проходят стажировки в крупнейших компаниях.'/>*/}
        {/*<AccordionSection infoBlock={facultetIT} isAreaTeaching={true}/>*/}
      <Header arrowBack={false} contains={['FAQ', 'Направления', 'Скрипты', 'Довуз']}/>
      <div className="container">
        <div className="window">
          <InfoButtonList
            infoHeader='Блок “FAQ”'
            infoText='Общие вопросы по поступлению в 2023 году'
            children={['Подача документов', 'Бюджет и БВИ', 'Платное и целевое обучение','Индивид. достижения',
              'Поступление по квотам', 'Учебный процесс и активности', 'Вопросы по общежитию', 'Отсрочка от армии',
              'Номера отделов']}
          />
        </div>
        <div className="window" id='picture'>
          {/*<img className='picture' src='./public/mainPicture.jpg' alt='Main' style={{width: 1905}}/>*/}
          <div className='text'>
            <h2>Hello</h2>
            <ButtonList children={['ИТ', 'КиИБ', "Рит", "СиСС", "ЦЭиМК"]}/>
          </div>
          <div>

          </div>
          <div>

          </div>
        </div>
        <div className="window">
          <InfoButtonList
            infoHeader='Блок "Скрипты"'
            infoText='Для сотрудников отдела телемаркетинга'
            children={['Скрипты для разговора', 'Вопросы верификации']}/>
        </div>
        <div className="window">
          <CardSection
            infoHeader={'Довузовская подготовка'}
            children={['Подготовка к ЕГЭ', 'Подготовка к ОГЭ', 'Подготовка к ВИ']}/>
        </div>
      </div>
        <MyFooter/>
      <img className='arrowUp' src="/../public/arrowUp.svg" alt="Стрелка вверх"/>
    </div>
  );
}

export default App;