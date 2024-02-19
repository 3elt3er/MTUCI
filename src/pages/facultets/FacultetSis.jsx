import Header from "../../components/UI/Header/Header.jsx";
import AccordionSection from "../../components/Accordion/AccordionSection.jsx";
import {facultetSis} from "../../data.js";
import FacultetPic from "../../components/FacultetPic/FacultetPic.jsx";
import classes from "./Facultet.module.css";


const FacultetSis = () => {
	return (
		<>
			<Header
				arrowBack={true}
				contains={['Факультет СиСС']}
				id={['facultet']}
				onClick={null}
			/>
			<div className={`window ${classes.picture}`} id={classes.picSis}>
				<FacultetPic
					header={'Факультет "Сети и системы связи(СиСС)"'}
					description={'Сети и системы связи(СиСС) - Факультет СиСС дает уникальную возможность своим студентам изучить передовые технологии информационной инфраструктуры и программных средств. СиСС связан с проводными технологиями. Студенты осваивают оптические и квантовые сети, защищенные инфокоммуникационные системы, которые направлены на расширение сетевых возможностей и создание глобальных информационных сервисов. Особое внимание уделяется проектированию и администрированию сетей. На факультете активно функционирует Квантовый центр, где квантовая сеть с открытым доступом введена в работу в Москве и соединяет университеты МТУСИ и НИТУ «МИСиС», и доступна для внешних подключений.'}/>
			</div>
			<div className="window noHeightLimit">
				<AccordionSection header='Направления подготовки' infoBlock={facultetSis} isAreaTeaching={true}/>
			</div>

		</>
	);
};

export default FacultetSis;