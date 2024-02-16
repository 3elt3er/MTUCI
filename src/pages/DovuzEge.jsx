import React from 'react';
import classes from "./DovuzEge.module.css";
import Header from "../components/UI/Header/Header.jsx";

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
      <div className='window' id='dovuz'>
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
              <span>Входное тестирование (для информатики и математики): 9.09, 10.09, 16.09, 17.09</span>
              <span>Старт курсов: 23.09.23</span>
              <span>Плановое окончание: 11.05.24</span>
              <span>(справочно: в 2023 году русский язык и математика закончили 27.05, информатика 17.06)</span>
            </div>
            <div className={classes.item}>
              <div className={classes.header}>Расписание</div>
              <span>Продолжительность: 32 занятия по 4 ак.часа (всего 128 к.часов)</span>
              <span>Расписание:</span>
              <span>1 занятие: с 9:00 до 12:15</span>
              <span>2 занятие: с 12:30 до 15:45 </span>
              <span>3 занятие: с 16:00 до 19:15</span>
            </div>
          </div>
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.thirdItem}`}>
              <div className={classes.header}>Стоимость</div>
              <span>Полный курс по одному предмету стоит 52 000 руб.</span>
              <span>Оплата ежемесячно по 6500 руб. за предмет.</span>
            </div>
            <div className={classes.item}>
              <div className={classes.header}>Формат</div>
              <span>Суббота:</span>
              <span>1. Информатика:</span>
              <span>2. Математика (профиль)</span>
              <span>Если берут 2 предмета, то время занятий может быть 1-2 (с 9:00 до 15:45), либо 2-3 (с 12:30 до 19:15), в зависимости от результатов входного тестирования</span>
              <span>Воскресенье:</span>
              <span>с 09:00 до 12:15</span>
              <span>Физика или обществознание</span>
            </div>
          </div>
        </div>
      </div>
      <div className='window' id='advantages'>
        <div className={classes.headerOfPage}>Преимущества наших курсов</div>
        <div className={classes.flexBlock}>
          <div className={classes.columns}>
            <div className={`${classes.item}`}>
              <span>Курсы проходят очно. Так информация усваивается лучше</span>
            </div>
            <div className={classes.item}>
              <span>Удобное время занятий – занятия проходят по выходным, в свободное от учебы время</span>
            </div>
            <div className={classes.item}>
              <span>Небольшая численность человек в группе – формируем группы от 12 до 16 человек</span>
            </div>
            <div className={classes.item}>
              <span>Возможность налогвого вычета</span>
            </div>
          </div>
          <div className={classes.columns}>
            <div className={`${classes.item}`}>
              <span>Наши преподаватели – это сотрудники ведущих московских школ и лицеев, которые ежегодно подтверждают
                свою квалификацию, сдавая независимую диагностику Московского центра качества образования в виде ЕГЭ.
                Обязательным требованиям для преподавателей является экспертный уровень ЕГЭ (от 85 до 100 баллов)</span>
            </div>
            <div className={classes.item}>
              <span>Возможность оплаты мат. капиталом</span>
            </div>
            <div className={classes.item}>
            <span>Входное тестирование для ЕГЭ 11 по информатике и математике – ранжируем слушателей по уровню знаний</span>
            </div>
          </div>
          <div className={classes.columns}>
            <div className={`${classes.item}`}>
              <span>Возможность видеть свои успехи, ежемесячно отчитываемся об успеваемости</span>
            </div>
            <div className={classes.item}>
              <span>Оплата через QR-код в любом мобильном приложении российского банка</span>
            </div>
            <div className={classes.item}>
              <span>Фиксированная стоимость и удобный способ оплаты – стоимость за 1 предмет в месяц 6 500 руб. либо
                4 000 руб. (в зависимости от выбранного курса), оплата через QR-код в любом мобильном приложении российского банка</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DovuzEge;