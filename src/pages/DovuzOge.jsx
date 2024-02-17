import React from 'react';
import classes from "./Dovuz.module.css";
import Header from "../components/UI/Header/Header.jsx";
import DovuzAdvantages from "../components/DovuzAdvantages/DovuzAdvantages.jsx";

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
      <div className='window' id='dovuz'>
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
              <span>Расписанием предусмотрен пятиминутный перерыв каждые 45 минут обучения, а также десятиминутный перерыв между занятиями.</span>
            </div>
          </div>
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.secondItem}`}>
              <div className={classes.header}>Расписание</div>
              <span>Продолжительность: 32 занятия по 2 ак.часа (всего 64 к.часов)</span>
              <span>Расписание 10 класс:</span>
              <span>Математика: с 12:30 до 14:05 </span>
              <span>Информатика и ИКТ: с 14:15 до 15:55</span>
            </div>
            <div className={classes.item}>
              <div className={classes.header}>Расписание</div>
              <span>Продолжительность: 32 занятия по 2 ак.часа (всего 64 к.часов)</span>
              <span>Расписание ОГЭ:</span>
              <span>Русский язык: с 9:00 до 10:35</span>
              <span>Математика: с 10:45 до 12:20 </span>
              <span>Информатика и ИКТ: с 12:30 до 14:05</span>
            </div>
          </div>
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.thirdItem}`}>
              <div className={classes.header}>Стоимость</div>
              <span>Полный курс по одному предмету стоит 32 000 руб.</span>
              <span>Оплата ежемесячно по 4000 руб. за предмет.</span>
            </div>
            <div className={classes.item}>
              <div className={classes.header}>Сроки (устарели)</div>
              <span>Входное тестирование (для информатики и математики): 9.09, 10.09, 16.09, 17.09</span>
              <span>Старт курсов: 23.09.23</span>
              <span>Плановое окончание: 11.05.24</span>
              <span>(справочно: в 2023 году русский язык и математика закончили 27.05, информатика 17.06)</span>
            </div>
          </div>
        </div>
      </div>
      <div className='window' id='advantages'>
        <DovuzAdvantages/>
      </div>
    </>
  );
};

export default DovuzOge;