import classes from "./Dovuz.module.css";
import Header from "../../components/UI/Header/Header.jsx";
import DovuzAdvantages from "../../components/DovuzAdvantages/DovuzAdvantages.jsx";
import { Simulate } from "react-dom/test-utils";

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
        contains={['Довузовская подготовка к ЕГЭ', 'Преимущества']}
        id={['dovuz', 'advantages']}
        onClick={executeScroll}
      />
      <div className='window noHeightLimitMobile' id='dovuz'>
        <div className={classes.headerOfPage}>Довузовская подготовка к ЕГЭ 11 класс</div>
        <div className={classes.flexBlock}>
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.firstItem}`}>
              <div className={classes.header}>Предметы 11</div>
              <span>1. Информатика</span>
              <span>2. Математика профильного уровня (требуется входное тестирование)</span>
              <span>3. Русский язык</span>
              <span>4. Физика</span>
            </div>
          </div>
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.firstItem}`}>
              <div className={classes.header}>Стоимость</div>
              <span>Полный курс по одному предмету 59 200 рублей за один предмет.</span>
              <span>Оплата ежемесячно по  7 400 рублей за один предмет</span>
            </div>
            <div className={classes.columns}>
              <div className={`${classes.item} ${classes.firstItem}`}>
                <div className={classes.header}>Формат обучение</div>
                <span>Суббота:</span>
                <span>с 10:00 до 16:45</span>
                <span>1. Информатика/математика (профиль)</span>
                <span>2. Математика (профиль)/информатика</span>
                <span>Расписание предметов зависит от группы</span>
                <span>Воскресенье:</span>
                <span>1. Физика с 10:00 до 13:15</span>
                <span>2. Русский язык с 13:30 до 16:45</span>
              </div>
            </div>
            <div className={classes.columns}>
              <div className={`${classes.item} ${classes.firstItem}`}>
                <div className={classes.header}>Расписание</div>
                 <span>Продолжительность: 32 занятия по 4 ак.часа (всего 128 ак.часов)</span>
                 <span>Расписание:</span>
                 <span>1 занятие: с 10:00 до 13:15</span>
                 <span>2 занятие: с 13:30 до 16:45</span>
              </div>
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