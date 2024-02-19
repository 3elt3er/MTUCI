import Header from "../../components/UI/Header/Header.jsx";
import AccordionSection from "../../components/Accordion/AccordionSection.jsx";
import {facultetOchnoZaoch} from "../../data.js";
import FacultetPic from "../../components/FacultetPic/FacultetPic.jsx";
import classes from "./Facultet.module.css";


const FacultetOchZaoch = () => {
  return (
    <>
      <Header
        arrowBack={true}
        contains={['Очно-заочный бакалавриат']}
        id={['facultet']}
        onClick={null}
      />
      <div className={`window ${classes.picture}`} id={classes.picOchZaoch}>
        <FacultetPic
          header={'Очно-заочный бакалавриат (ЦИО)'}
          description={'Очно-заочный бакалавриат предполагает обучение по 1 направлению. Обучение проходит по вечерам 3-4 раза в неделю.'}/>
      </div>
      <div className="window noHeightLimit">
        <AccordionSection header='Направления подготовки' infoBlock={facultetOchnoZaoch} isAreaTeaching={true}/>
      </div>

    </>
  );
};

export default FacultetOchZaoch;