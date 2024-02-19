import classes from "../../pages/dovuz/Dovuz.module.css";

const DovuzAdvantages = () => {
  return (
    <>
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
    </>
  );
};

export default DovuzAdvantages;