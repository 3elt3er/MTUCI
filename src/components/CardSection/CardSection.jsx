import classes from "./CardSection.module.css";
import ButtonList from "../ButtonList/ButtonList.jsx";
import PropTypes from "prop-types";

const CardSection = ({infoHeader, children}) => {

	return (
		<section className={classes.card}>
			<div className={classes.cardContains}>
				<div className={classes.infoHeader}>
					{infoHeader}
				</div>
				<ButtonList>
					{children}
				</ButtonList>
			</div>
		</section>
	);
};

CardSection.propTypes = {
	infoHeader: PropTypes.string.isRequired,
	children: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			to: PropTypes.string.isRequired
		})
	).isRequired
};

export default CardSection;