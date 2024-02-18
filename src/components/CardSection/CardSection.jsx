import React from 'react';
import classes from "./CardSection.module.css";
import ButtonList from "../ButtonList/ButtonList.jsx";
const CardSection = ({infoHeader, children}) => {
	const buttonsData = [
		{ text: children[0], to: '/dovuz-ege' },
		{ text: children[1], to: '/dovuz-oge' },
		{ text: children[2], to: '/dovuz-vi' },
	];
	return (
		<section className={classes.card}>
			<div className={classes.cardContains}>
				<div className={classes.infoHeader}>
					{infoHeader}
				</div>
				<ButtonList children={buttonsData}/>
			</div>
		</section>
	);
};

export default CardSection;