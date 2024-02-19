import Header from "../../components/UI/Header/Header.jsx";
import AccordionSection from "../../components/Accordion/AccordionSection.jsx";
import {facultetMagOchZaoch} from "../../data.js";
import FacultetPic from "../../components/FacultetPic/FacultetPic.jsx";
import classes from "./Facultet.module.css";


const MagaOchnZaoch = () => {
  return (
    <>
      <Header
        arrowBack={true}
        contains={['Очно-заочная магистратура']}
        id={['facultet']}
        onClick={null}
      />
      <div className={`window ${classes.picture}`} id={classes.picMagOchZaoch}>
        <FacultetPic
          header={'Магистратура очно-заочная'}
          description={'Очная магистратура базируется на обучении студентов по 3 направлениям.'}/>
      </div>
      <div className="window noHeightLimit">
        <AccordionSection header='Направления подготовки' infoBlock={facultetMagOchZaoch} isAreaTeaching={true}/>
      </div>

    </>
  );
};

export default MagaOchnZaoch;