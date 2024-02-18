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
            {
              [
                { text: 'Подача документов', to: '/submission' },
                { text: 'Бюджет и БВИ', to: '/budget-bvi'},
                { text: 'Платное и целевое обучение', to: '/paid-training'},
                { text: 'Индивид. достижения', to: '/individual-achievements'},
                { text: 'Поступление по квотам', to: '/quotas'},
                { text: 'Учебный процесс и активности', to: '/activities'},
                { text: 'Вопросы по общежитию', to: '/hostel'},
                { text: 'Отсрочка от армии', to: '/deferment'},
                { text: 'Номера отделов', to: '/numbers'},
              ]
            }
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
            {
              [
                {text: 'Скрипты для разговора', to: '/scripts'},
                {text: 'Вопросы верификации', to: '/verification'}
              ]
            }
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