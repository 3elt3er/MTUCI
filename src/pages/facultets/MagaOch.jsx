import Header from "../../components/UI/Header/Header.jsx";
import AccordionSection from "../../components/Accordion/AccordionSection.jsx";
import {facultetMagOch} from "../../data.js";
import FacultetPic from "../../components/FacultetPic/FacultetPic.jsx";
import classes from "./Facultet.module.css";


const MagaOch = () => {
  return (
    <>
      <Header
        arrowBack={true}
        contains={['Очная магистратура']}
        id={['facultet']}
        onClick={null}
      />
      <div className={`window ${classes.picture}`} id={classes.picMagOch}>
        <FacultetPic
          header={'Магистратура Очная'}
          description={'Очная магистратура базируется на обучении студентов по 7 направлениям.'}/>
      </div>
      <div className="window noHeightLimit">
        <AccordionSection header='Направления подготовки' infoBlock={facultetMagOch} isAreaTeaching={true} isMagistratura={true}/>
      </div>

    </>
  );
};

export default MagaOch;