import classes from "./Dovuz.module.css";
import Header from "../../components/UI/Header/Header.jsx";
import DovuzAdvantages from "../../components/DovuzAdvantages/DovuzAdvantages.jsx";

const DovuzVi = () => {
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
        contains={['Довузовская подготовка к ВИ', 'Преимущества']}
        id={['dovuz', 'advantages']}
        onClick={executeScroll}
      />
      <div className='window noHeightLimitMobile' id='dovuz'>
        <div className={classes.headerOfPage}>Довузовская подготовка к ВИ</div>
        <div className={classes.flexBlock}>
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.firstItem}`}>
              <div className={classes.header}>Предметы</div>
              <span>Информатика и ИКТ</span>
              <span>Математика</span>
              <span>Русский язык</span>
            </div>
            <div className={classes.item}>
              <div className={classes.header}>Примечания</div>
              <span>Расписанием предусмотрен пятиминутный перерыв каждые 45 минут обучения, а также пятнадцатиминутный перерыв между занятиями.</span>
            </div>
          </div>
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.secondItem}`}>
              <div className={classes.header}>Сроки</div>
              <span>1 поток: 2 Ноябрь 2024 – 21 Июня 2025</span>
              <span>Продолжительность: 32 занятий по 2 ак.часа (всего 64 к.часов)</span>
              <span>2 поток: 1 Март 2024 – 21 Июня 2025</span>
              <span>Продолжительность: 16 занятий по 2 ак.часа (всего 32 к.часов)</span>
            </div>
            <div className={classes.item}>
              <div className={classes.header}>Расписание</div>
              <span>Расписание:</span>
              <span>1 занятие: с 11:00 до 12:30</span>
              <span>2 занятие: с 12:45 до 14:15 </span>
              <span>3 занятие: с 14:30 до 16:00</span>
              <span>3 занятие: с 16:15 до 17:45</span>
            </div>
          </div>
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.thirdItem}`}>
              <div className={classes.header}>Стоимость</div>
              <span>Полный курс по одному предмету стоит 16 000 руб.</span>
              <span>Оплата ежемесячно по 4000 руб. за предмет.</span>
            </div>
            <div className={classes.item}>
              <div className={classes.header}>Формат</div>
              <span>Суббота:</span>
              <span>1. Информатика</span>
              <span>2. Математика</span>
              <span>2. Русский язык</span>
              <span>Если берут 2 предмета, то время занятий может быть 1-2, 2-3, 3-4, если берут 3 предмета, то время занятий может быть 1-3, 2-4</span>
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

export default DovuzVi;