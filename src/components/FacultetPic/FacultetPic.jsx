import React from 'react';
import classes from "./FacultetPic.module.css";
import AreasOfTeaching from "../AreasOfTeaching/AreasOfTeaching.jsx";
import AreasTeaching from "../Accordion/AreasTeaching/AreasTeaching.jsx";
import AccordionSection from "../Accordion/AccordionSection.jsx";
import {facultetIT} from "../../data.js";

const FacultetPic = ({ header, description }) => {
	return (
		<>
			<section className={classes.main}>
				<h2 className={classes.header}>{header}</h2>
				<div className={classes.description}>{description}</div>
			</section>
		</>

	);
};

export default FacultetPic;