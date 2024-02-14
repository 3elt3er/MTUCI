import './index.css'
import InfoButtonList from "./components/InfoButtonList/InfoButtonList";
import Header from "./components/UI/Header/Header.jsx";
import CardSection from "./components/CardSection/CardSection.jsx";
import MyFooter from "./components/UI/Footer/MyFooter.jsx";
import React from "react";
import AreasOfTeaching from "./components/AreasOfTeaching/AreasOfTeaching.jsx";

function App() {
  return (
    <div className="App">
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
          <AreasOfTeaching/>
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