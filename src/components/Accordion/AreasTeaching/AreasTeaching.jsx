import '../../../data.js'
import {facultetIT} from "../../../data.js";
import classes from "./AreasTeaching.module.css";

const AreasTeaching = ({points, number, price, profile, about, proffessions, companies, isMagistratura}) => {
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
          <p><b>Минимальные проходные (Бюджет/Коммерция):</b> </p>
            {!isMagistratura ?
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
                </div> :
                <div className={classes.bottomSection}>
                    <div className={classes.bottomBlock}>
                        <h4>Бюджет:</h4>
                        <span>Минимальный балл ВИ: 30</span>
                    </div>
                    <div className={classes.bottomBlock}>
                        <h4>Коммерция:</h4>
                        <span>Минимальный балл ВИ: 30</span>
                    </div>
                </div>}
        </section>
                )
            }

export default AreasTeaching;