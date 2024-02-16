import InfoButtonList from "../components/InfoButtonList/InfoButtonList.jsx";
import Header from "../components/UI/Header/Header.jsx";
import AccordionSection from "../components/Accordion/AccordionSection.jsx";
import {activities, facultetCimk, facultetIT, facultetMagZaoch} from "../data.js";
import AreasOfTeaching from "../components/AreasOfTeaching/AreasOfTeaching.jsx";
import FacultetPic from "../components/FacultetPic/FacultetPic.jsx";
import classes from "./Facultet.module.css";
import React from "react";


const MagaZaoch = () => {
	return (
		<>
			<Header
				arrowBack={true}
				contains={['Заочная магистратура']}
				id={['facultet']}
				onClick={null}
			/>
			<div className={`window ${classes.picture}`} id={classes.picMagZaoch}>
				<FacultetPic
					header={'Магистратура заочная'}
					description={'Заочная магистратура базируется на обучении студентов по 3 направлениям.'}/>
			</div>
			<div className="window noHeightLimit">
				<AccordionSection header='Направления подготовки' infoBlock={facultetMagZaoch} isAreaTeaching={true}/>
			</div>

		</>
	);
};

export default MagaZaoch;