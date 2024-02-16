import InfoButtonList from "../components/InfoButtonList/InfoButtonList.jsx";
import Header from "../components/UI/Header/Header.jsx";
import AccordionSection from "../components/Accordion/AccordionSection.jsx";
import {activities, facultetIT, facultetRit, facultetSis} from "../data.js";
import AreasOfTeaching from "../components/AreasOfTeaching/AreasOfTeaching.jsx";
import FacultetPic from "../components/FacultetPic/FacultetPic.jsx";
import classes from "./Facultet.module.css";
import React from "react";


const FacultetRit = () => {
	return (
		<>
			<Header
				arrowBack={true}
				contains={['Факультет РиТ']}
				id={['facultet']}
				onClick={null}
			/>
			<div className={`window ${classes.picture}`} id={classes.picRit}>
				<FacultetPic
					header={'Факультет "Радио и телевидение(РиТ)"'}
					description={'Радио и телевидение(РиТ) - Один из фундаментальных факультетов МТУСИ, который реализует инженерную подготовку. РиТ занимается всеми беспроводными системами, ведь студенты участвуют в развитии стандартов 5G/6G, работают с действующими спутниками, проектируют антенны, и даже могут собирать малые космические аппараты. Специалисты в будущем разрабатывают современные устройства для формирования, передачи и приема сигналов.\n' +
						'\n' +
						'На факультете есть два научных центра: Центр радиочастотного мониторинга и Центр 5G-6G, а также студенты практикуются на ТВ студии факультета. Выпусники получают профессии на стыке творчества и технологий.'}/>
			</div>
			<div className="window noHeightLimit">
				<AccordionSection header='Направления подготовки' infoBlock={facultetRit} isAreaTeaching={true}/>
			</div>

		</>
	);
};

export default FacultetRit;