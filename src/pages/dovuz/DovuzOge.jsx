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
        <div className={classes.headerOfPage}>Довузовская подготовка к ОГЭ и 10 класс</div>
        <div className={classes.flexBlock}>
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.firstItem}`}>
              <div className={classes.header}>Предметы</div>
              <span>Информатика и ИКТ</span>
              <span>Русский язык</span>
              <span>Математика профильного уровня</span>
            </div>
            <div className={classes.item}>
              <div className={classes.header}>Примечания</div>
              <span>Расписанием предусмотрен пятиминутный перерыв каждые 45 минут обучения, а также пятнадцатиминутный перерыв между занятиями.</span>
            </div>
          </div>
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.secondItem}`}>
              <div className={classes.header}>Расписание</div>
              <span>Продолжительность: 32 занятия по 2 ак.часа (всего 64 к.часов)</span>
              <span>Расписание 10 класс:</span>
              <span>Математика: с 10:00 до 11:35 </span>
              <span>Информатика и ИКТ: с 11:45 до 13:20</span>
            </div>
            <div className={classes.item}>
              <div className={classes.header}>Расписание</div>
              <span>Продолжительность: 32 занятия по 2 ак.часа (всего 64 к.часов)</span>
              <span>Расписание ОГЭ:</span>
              <span>Русский язык: с 10:00 до 11:35</span>
              <span>Математика: с 11:45 до 13:20 </span>
              <span>Информатика и ИКТ: с 13:30 до 15:05</span>
            </div>
          </div>
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.thirdItem}`}>
              <div className={classes.header}>Стоимость</div>
              <span>Полный курс по одному предмету стоит 36 000 руб.</span>
              <span>Оплата ежемесячно по 4500 руб. за предмет.</span>
            </div>
            <div className={classes.item}>
              <div className={classes.header}>Сроки</div>
              <span>Старт курсов: 21.09.24</span>
              <span>Плановое окончание: 10.05.25</span>
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