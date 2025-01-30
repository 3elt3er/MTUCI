import '../../../data.js'
import classes from "./AreasTeaching.module.css";
import PropTypes from "prop-types";

const AreasTeaching = ({points, number, price, profile, about, proffessions, companies, isMagistratura, isCimk, isMathandInf}) => {
  return (
    <section className={classes.areasTeaching}>
      <div className={classes.upperSection}>
        <div className={classes.block}>
          <h4>Проходной балл</h4>
          <div className={classes.info}>{points}</div>
        </div>
        <div className={classes.block}>
          <h4>Количество мест</h4>
          <div className={classes.info}>{number}</div>
        </div>
        <div className={classes.block}>
          <h4>Стоимость</h4>
          <div className={classes.info}>{price}</div>
        </div>
      </div>
      <p><b>Профиль:</b> {profile}</p>
      <p><b>О направлении:</b> {about}</p>
      <p><b>Профессии:</b> {proffessions}</p>
      <p><b>Компании:</b> {companies}</p>
      <p><b>Минимальные проходные (Бюджет/Коммерция):</b></p>
      
      {isMagistratura ? // Расклад минималок по всему маге по блокам
        <div className={classes.bottomSection}>
          <div className={classes.bottomBlock}>
            <h4>Бюджет:</h4>
            <span>Минимальный балл ВИ: 30</span>
          </div>
          <div className={classes.bottomBlock}>
            <h4>Коммерция:</h4>
            <span>Минимальный балл ВИ: 30</span>
          </div>
        </div>
        : null
      }

      {isCimk ? // Расклад минималок по всему ЦЭиМКу по блокам
        <div className={classes.bottomSection}>
          <div className={classes.bottomBlock}>
            <h4>ЕГЭ (38.00.00):</h4>
            <span>Математика 40/27</span>
            <span>Русский язык 40/36</span>
            <span>ИЛИ Информатика 40/40</span>
            <span>ИЛИ Обществознание 40/42</span>
          </div>
          <div className={classes.bottomBlock}>
            <h4>ВИ(38.00.00):</h4>
            <span>Матем. и эл. теор. вер. 40/10</span>
            <span>Русский язык 40/36</span>
            <span>ИЛИ Инф. и инф-коммункац. тех. 40/10</span>
            <span>ИЛИ Основы экономики 40/10</span>
          </div>
          <div className={classes.bottomBlock}>
            <h4>ЕГЭ(42.00.00):</h4>
            <span>Обществознание 40/42</span>
            <span>Русский язык 40/36</span>
            <span>ИЛИ Информатика 40/40</span>
            <span>ИЛИ История 40/32</span>
            <span>ИЛИ Иностранный 40/30</span>
          </div>
          <div className={classes.bottomBlock}>
            <h4>ВИ(42.00.00):</h4>
            <span>Основы рекламы 40/10</span>
            <span>Русский язык 40/36</span>
            <span>ИЛИ Инф. и инф-коммункац. тех. 40/10</span>
            <span>ИЛИ Ин. яз в проф. деят. 40/10</span>
          </div>
        </div>
        : null
      }

      {!isCimk && !isMagistratura && !isMathandInf ? // Расклад минималок по всем остальным направлениям по блокам
        <div className={classes.bottomSection}>
          <div className={classes.bottomBlock}>
            <h4>ЕГЭ:</h4>
            <span>Информатика 40/40</span>
            <span>Физика 40/36</span>
            <span>Математика 40/27</span>
            <span>Русский язык 40/36</span>
          </div>
          <div className={classes.bottomBlock}>
            <h4>ВИ:</h4>
            <span>Инф. тех. и программир. 40/10</span>
            <span>Матем. и эл. теор. вер. 40/10</span>
            <span>Русский язык 40/36</span>
          </div>
        </div>
        : null
      }
    </section>
  )
}

AreasTeaching.propTypes = {
  points: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  proffessions: PropTypes.string.isRequired,
  companies: PropTypes.string.isRequired,
  isMagistratura: PropTypes.bool,
  isCimk: PropTypes.bool,
  isMathandInf: PropTypes.bool
}

export default AreasTeaching;


