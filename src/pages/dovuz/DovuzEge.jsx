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
        contains={['Довузовская подготовка к ЕГЭ', 'Преимущества']}
        id={['dovuz', 'advantages']}
        onClick={executeScroll}
      />
      <div className='window noHeightLimitMobile' id='dovuz'>
        <div className={classes.headerOfPage}>Довузовская подготовка к ЕГЭ</div>
        <div className={classes.flexBlock}>
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.firstItem}`}>
              <div className={classes.header}>Предметы</div>
              <span>Информатика и ИКТ</span>
              <span>Математика профильного уровня (требуется входное тестирование)</span>
              <span>Русский язык</span>
              <span>Физика</span>
              <span>Обществознание</span>
            </div>
            <div className={classes.item}>
              <div className={classes.header}>Примечания</div>
              <span>Расписанием предусмотрен пятиминутный перерыв каждые 45 минут обучения, а также пятнадцатиминутный перерыв между занятиями.</span>
              <span>Возможно продление курса в связи с переносом занятий ввиду проведения общегородских пробников ЕГЭ.</span>
            </div>
          </div>
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.secondItem}`}>
              <div className={classes.header}>Сроки</div>
              <span>Входное тестирование (для информатики и математики): 21.09.24</span>
              <span>Старт курсов: 21.09.24</span>
              <span>Плановое окончание: 10.05.25</span>
              <span>(справочно: в 2024 году русский язык и математика закончили 27.05, информатика 17.06)</span>
            </div>
            <div className={classes.item}>
              <div className={classes.header}>Расписание</div>
              <span>Продолжительность: 32 занятия по 4 ак.часа (всего 128 к.часов)</span>
              <span>Расписание:</span>
              <span>1 занятие: с 10:00 до 13:15</span>
              <span>2 занятие: с 13:30 до 16:45 </span>
            </div>
          </div>
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.thirdItem}`}>
              <div className={classes.header}>Стоимость</div>
              <span>Полный курс по одному предмету стоит 56 000 руб.</span>
              <span>Оплата ежемесячно по 7000 руб. за предмет.</span>
            </div>
            <div className={classes.item}>
              <div className={classes.header}>Формат</div>
              <span>Суббота:</span>
              <span>1. Информатика:</span>
              <span>2. Математика (профиль)</span>
              <span>Если берут 2 предмета, то время занятий может быть 1-2 (с 10:00 до 16:45), либо 2-3 (с 13:30 до 20:15), в зависимости от результатов входного тестирования</span>
              <span>Воскресенье:</span>
              <span>Физика или обществознание с 09:00 до 12:15</span>
              <span>Русский язык с 13:30 до 16:45</span>
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