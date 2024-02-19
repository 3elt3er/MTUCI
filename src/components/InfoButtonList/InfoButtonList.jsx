import classes from './InfoButtonList.module.css'
import ButtonList from "../ButtonList/ButtonList.jsx";
import PropTypes from "prop-types";

const InfoButtonList = ({infoHeader, infoText, children}) => {
  return (
    <section className={classes.infoButton}>
      <div className={classes.infoBlock}>
        <div className={classes.infoHeader}>
          {infoHeader}
        </div>
        <div className={classes.infoText}>
          {infoText}
        </div>
      </div>
      <ButtonList>
        {children}
      </ButtonList>
    </section>
  );
};

InfoButtonList.propTypes = {
  infoHeader: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default InfoButtonList;