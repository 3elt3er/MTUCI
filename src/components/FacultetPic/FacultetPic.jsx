import React from 'react';
import classes from "./FacultetPic.module.css";

const FacultetPic = ({ header, description, facultet }) => {
	return (
		<>
			<section className={classes.main}>
				<img className={classes.picture} src={facultet} alt='It'/>
				<h2 className={classes.header}>{header}</h2>
				<div className={classes.description}>{description}</div>
			</section>
				<h2 className={classes.headerAccordion}>Направления подготовки</h2>
		</>

	);
};

export default FacultetPic;