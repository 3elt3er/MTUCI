import classes from "./Dovuz.module.css";
import Header from "../../components/UI/Header/Header.jsx";
import DovuzAdvantages from "../../components/DovuzAdvantages/DovuzAdvantages.jsx";

const DovuzOge = () => {
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
        contains={['Довузовская подготовка к ОГЭ и 10 класс', 'Преимущества']}
        id={['dovuz', 'advantages']}
        onClick={executeScroll}
      />
      <div className='window noHeightLimitMobile' id='dovuz'>
        <div className={classes.headerOfPage}>Довузовская подготовка к ОГЭ</div>
        <div className={classes.flexBlock}>
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.firstItem}`}>
              <div className={classes.header}>Предметы:</div>
              <span>1. Информатика</span>
              <span>2. Русский язык</span>
              <span>3. Математика</span>
            </div>
            <div className={`${classes.item} ${classes.firstItem}`}>
              <div className={classes.header}>Стоимость:</div>
              <span>Полный курс по одному предмету 36 800 рублей за один предмет.</span>
              <span>Оплата ежемесячно по  4 600 рублей за один предмет</span>
            </div>
            <div className={`${classes.item} ${classes.firstItem}`}>
              <div className={classes.header}>Формат:</div>
              <span>Продолжительность: 32 занятия по 2 ак.часа (всего 64 ак.часа)</span>
              <span>Суббота:</span>
              <span>1. Русский язык с 10:00 до 11:35</span>
              <span>2. Математика (профиль) с 11:45 до 13:20</span>
              <span>3. Информатика с 13:30 до 15:05</span>
            </div>
            <div className={`${classes.item} ${classes.firstItem}`}>
              <div className={classes.header}>Расписание:</div>
              <span>1 занятие: с 10:00 до 11:35</span>
              <span>2 занятие: с 11:45 до 13:20</span>
              <span>3 занятие с 13:30 до 15:05</span>
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

export default DovuzOge;