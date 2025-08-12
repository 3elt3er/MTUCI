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
              <div className={classes.header}>Формат курсов:</div>
              <span>• полный курс(старт 05.10.2025)</span>
              <span>• ускоренный курс(старт 02.03.2026)</span>
              <span>• ускоренный курс в дистанционном формате</span>
            </div>
          </div>
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.firstItem}`}>
              <div className={classes.header}>Предметы</div>
              <span>1. Информатика и информационно-коммуникационные технологии</span>
              <span>2. Математика и элементы теории вероятностей</span>
              <span>3. Русский язык</span>
            </div>
          </div>
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.firstItem}`}>
              <div className={classes.header}>Стоимость полных и ускоренных курсов ВИ в ОЧНОМ формате:</div>
              <span>Стоимость 1 месяца (4 занятия) - 5000Р</span>
              <span>Стоимость ПОЛНОГО курса (32 занятия) - 40000Р</span>
              <span>Стоимость УСКОРЕННОГО курса (16 занятий) - 20000Р</span>
            </div>
          </div>
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.firstItem}`}>
              <div className={classes.header}>Стоимость ускоренного курса в ДИСТАНЦИОННОМ формате:</div>
              <span>Стоимость 1 месяца (4 занятия) - 4000Р</span>
              <span>Стоимость курса (16 занятий) - 16000Р</span>
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