// AreasOfTeaching.jsx
import ButtonList from "../ButtonList/ButtonList.jsx";
import classes from "./AreasOfTeaching.module.css";
import PropTypes from 'prop-types';

const AreasOfTeaching = ({ firstRow, secondRow, thirdRow }) => {
  const whiteButtonStyles = {
    color: 'white',
    border: '1px solid white'
  };

  return (
    <div className={classes.flexBox}>
      <div className={classes.areasOfTeaching}>
        <h2>Очный бакалавриат</h2>
        <ButtonList style={whiteButtonStyles}>
          {firstRow}
        </ButtonList>
      </div>
      <div className={classes.areasOfTeaching}>
        <h2>Заочный бакалавриат</h2>
        <ButtonList style={whiteButtonStyles}>
          {secondRow}
        </ButtonList>
      </div>
      <div className={classes.areasOfTeaching}>
        <h2>Магистратура</h2>
        <ButtonList style={whiteButtonStyles}>
          {thirdRow}
        </ButtonList>
      </div>
    </div>
  );
};

AreasOfTeaching.propTypes = {
  firstRow: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ),
  secondRow: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ),
  thirdRow: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  )
};

export default AreasOfTeaching;
