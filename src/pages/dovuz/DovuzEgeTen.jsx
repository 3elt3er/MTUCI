import classes from "./Dovuz.module.css";
import Header from "../../components/UI/Header/Header.jsx";
import DovuzAdvantages from "../../components/DovuzAdvantages/DovuzAdvantages.jsx";

const DovuzEge = () => {
  const executeScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header
        arrowBack={true}
        contains={['Довузовская подготовка к ЕГЭ 10 класс', 'Преимущества']}
        id={['dovuz', 'advantages']}
        onClick={executeScroll}
      />

      <div className='window noHeightLimitMobile' id='dovuz'>
        <div className={classes.headerOfPage}>Довузовская подготовка к ЕГЭ 10 класс</div>
        
        <div className={classes.flexBlock}>
          {/* Блок 1: Предметы */}
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.firstItem}`}>
              <div className={classes.header}>Предметы:</div>
              <span>1. Информатика</span>
              <span>2. Математика профильного уровня (требуется входное тестирование)</span>
            </div>
          </div>

          {/* Блок 2: Стоимость */}
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.firstItem}`}>
              <div className={classes.header}>Стоимость:</div>
              <span>Стоимость курса (32 занятия) - 36800Р</span>
              <span>Стоимость 1 месяца (4 занятия) - 4600Р</span>
            </div>
          </div>

          {/* Блок 3: Формат обучения */}
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.firstItem}`}>
              <div className={classes.header}>Формат обучения:</div>
              <span>Продолжительность: 32 занятия по 2 ак.часа (всего 64 ак.часа)</span>
              <span>Суббота:</span>
              <span>с 10:00 до 16:45</span>
              <span>1. Математика (профиль) с 11:45 до 13:20</span>
              <span>2. Информатика с 10:00 до 11:35</span>
            </div>
          </div>

          {/* Блок 4: Расписание */}
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.firstItem}`}>
              <div className={classes.header}>Расписание:</div>
              <span>1 занятие: с 10:00 до 13:15</span>
              <span>2 занятие: с 11:45 до 13:20</span>
            </div>
          </div>
        </div>
      </div>

      <div className='window noHeightLimitMobile' id='advantages'>
        <DovuzAdvantages/>
      </div>
    </>
  );
};

export default DovuzEge;