import Header from "../components/UI/Header/Header.jsx";
import InfoButtonList from "../components/InfoButtonList/InfoButtonList.jsx";
import AreasOfTeaching from "../components/AreasOfTeaching/AreasOfTeaching.jsx";
import CardSection from "../components/CardSection/CardSection.jsx";
import MyFooter from "../components/UI/Footer/MyFooter.jsx";
import {useEffect, useRef} from "react";

const MainPage = () => {

  const arrowRef = useRef(null)
  const executeScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const hideArrow = () => {
    console.log(window.scrollY)
    window.scrollY < 300 ? arrowRef.current.style.opacity = '0' : arrowRef.current.style.opacity = '1'
  }

  useEffect(() => {
    window.addEventListener("scroll", hideArrow);
    return () => {
      window.removeEventListener("scroll", hideArrow);
    };
  }, []);


  return (
    <>
      <Header
        arrowBack={false}
        contains={['FAQ', 'Направления', 'Скрипты', 'Довуз']}
        id={['FAQ', 'picture', 'scripts', 'dovuz']}
        onClick={executeScroll}
      />
      <div className="container">
        <div className="window" id='FAQ'>
          <InfoButtonList
            infoHeader='Блок “FAQ”'
            infoText='Общие вопросы по поступлению в 2023 году'
          >
            {['Подача документов', 'Бюджет и БВИ', 'Платное и целевое обучение','Индивид. достижения',
              'Поступление по квотам', 'Учебный процесс и активности', 'Вопросы по общежитию', 'Отсрочка от армии',
              'Номера отделов']}
          </InfoButtonList>
        </div>
        <div className="window" id='picture'>
          <AreasOfTeaching/>
        </div>
        <div className="window" id='scripts'>
          <InfoButtonList
            infoHeader='Блок "Скрипты"'
            infoText='Для сотрудников отдела телемаркетинга'
          >
            {['Скрипты для разговора', 'Вопросы верификации']}
          </InfoButtonList>
        </div>
        <div className="window" id='dovuz'>
          <CardSection
            infoHeader={'Довузовская подготовка'}
          >
            {['Подготовка к ЕГЭ', 'Подготовка к ОГЭ', 'Подготовка к ВИ']}
          </CardSection>
        </div>
      </div>
      <MyFooter/>
      <button onClick={() => executeScroll('FAQ')}>
        <img ref={arrowRef} className='arrowUp' src="/../public/arrowUp.svg" alt="Стрелка вверх"/>
      </button>
    </>
  );
};

export default MainPage;