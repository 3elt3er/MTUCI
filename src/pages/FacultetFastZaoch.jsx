import InfoButtonList from "../components/InfoButtonList/InfoButtonList.jsx";
import Header from "../components/UI/Header/Header.jsx";
import AccordionSection from "../components/Accordion/AccordionSection.jsx";
import {
  activities,
  facultetCimk, facultetFastZaoch,
  facultetIT,
  facultetMagOch,
  facultetMagZaoch,
  facultetOchnoZaoch,
  facultetZaoch
} from "../data.js";
import AreasOfTeaching from "../components/AreasOfTeaching/AreasOfTeaching.jsx";
import FacultetPic from "../components/FacultetPic/FacultetPic.jsx";
import classes from "./Facultet.module.css";


const FacultetFastZaoch = () => {
  return (
    <>
      <Header
        arrowBack={true}
        contains={['Ускоренный заочный бакалавриат']}
        id={['facultet']}
        onClick={null}
      />
      <div className={`window ${classes.picture}`} id={classes.picFastZaoch}>
        <FacultetPic
          header={'Ускоренный заочный бакалавриат (ЦИО)'}
          description={'Ускоренный заочный бакалавриат предполагает обучение по 2 направлениям в разных областях. Данные направления предоставляются абитуриентам, которые поступают к нам после колледжа. Условие: абитуриент должен закончить смежное направление. То есть в дипломе код направления должен начинаться с 09, 10 или 11. После направлений 09 абитуриент может поступить на 09.03.02. После направлений 11 - на направление 11.03.02. Преимуществом нашего ускоренного заочного обучения является сокращение срока обучения за счет того, что абитуриент прошел некоторые дисциплины в колледже.'}/>
      </div>
      <div className="window noHeightLimit">
        <AccordionSection header='Направления подготовки' infoBlock={facultetFastZaoch} isAreaTeaching={true}/>
      </div>

    </>
  );
};

export default FacultetFastZaoch;