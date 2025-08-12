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
          {/* Блок 1: Формат курсов */}
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.firstItem}`}>
              <div className={classes.header}>Формат курсов:</div>
              <span>• Полный курс (старт 05.10.2025)</span>
              <span>• Ускоренный курс (старт 02.03.2026)</span>
              <span>• Ускоренный курс в дистанционном формате</span>
            </div>
          </div>

          {/* Блок 2: Предметы */}
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.firstItem}`}>
              <div className={classes.header}>Предметы:</div>
              <span>1. Информатика и информационно-коммуникационные технологии</span>
              <span>2. Математика и элементы теории вероятностей</span>
              <span>3. Русский язык</span>
            </div>
          </div>

          {/* Блок 3: Стоимость очных курсов */}
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.firstItem}`}>
              <div className={classes.header}>Стоимость полных и ускоренных курсов ВИ в очном формате:</div>
              <span>• Стоимость 1 месяца (4 занятия) - 5 000 ₽</span>
              <span>• Стоимость полного курса (32 занятия) - 40 000 ₽</span>
              <span>• Стоимость ускоренного курса (16 занятий) - 20 000 ₽</span>
            </div>
          </div>

          {/* Блок 4: Стоимость дистанционных курсов */}
          <div className={classes.columns}>
            <div className={`${classes.item} ${classes.firstItem}`}>
              <div className={classes.header}>Стоимость ускоренного курса в дистанционном формате:</div>
              <span>• Стоимость 1 месяца (4 занятия) - 4 000 ₽</span>
              <span>• Стоимость курса (16 занятий) - 16 000 ₽</span>
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