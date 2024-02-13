import React from 'react';
import classes from "./CardSection.module.css";
import ButtonList from "../ButtonList/ButtonList.jsx";
const CardSection = ({infoHeader, children}) => {
	return (
		<section className={classes.card}>
			<div className={classes.cardContains}>
				<div className={classes.infoHeader}>
					{infoHeader}
				</div>
				<ButtonList children={children}/>
			</div>
		</section>
	);
};

export default CardSection;