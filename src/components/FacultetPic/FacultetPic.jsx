import classes from "./FacultetPic.module.css";
import PropTypes from "prop-types";

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

FacultetPic.propTypes = {
	header: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default FacultetPic;