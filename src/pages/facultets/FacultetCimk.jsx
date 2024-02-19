import Header from "../../components/UI/Header/Header.jsx";
import AccordionSection from "../../components/Accordion/AccordionSection.jsx";
import {facultetCimk} from "../../data.js";
import FacultetPic from "../../components/FacultetPic/FacultetPic.jsx";
import classes from "./Facultet.module.css";


const FacultetIt = () => {
	return (
		<>
			<Header
				arrowBack={true}
				contains={['Факультет ЦЭиМК']}
				id={['facultet']}
				onClick={null}
			/>
			<div className={`window ${classes.picture}`} id={classes.picCimk}>
				<FacultetPic
					header={'Факультет "Цифровая экономика и Массовые коммуникации'}
					description={'Цифровая экономика и Массовые коммуникации (ЦЭиМК) - Факультет осуществляет подготовку бакалавров и магистров по направлениям, отражающим современные тенденции в теории и практике цифровой экономики, управления, бизнес-технологий, рекламы, бизнес-информатики. Студенты изучают специфику ведения IT-бизнеса, организации стартапов, управления инновационными IT-проектами. А также получают прикладные знания на стыке гуманитарного блока и отрасли IT, которая стремительно развивается. Именно поэтому работодатели заинтересованы в экономисте/менеджере/бизнес-аналитике, который разбирается в IT. Существенным плюсом является то, что на каждом направлении выпускник получает второй диплом по специальности "Менеджмент", уменьшив срок и стоимость дополнительного образования.'}/>
			</div>
			<div className="window noHeightLimit">
				<AccordionSection header='Направления подготовки' infoBlock={facultetCimk} isAreaTeaching={true}/>
			</div>

		</>
	);
};

export default FacultetIt;