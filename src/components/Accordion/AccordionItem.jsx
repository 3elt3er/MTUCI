import classes from "./AccordionItem.module.css";
import {useRef} from "react";
import AreasTeaching from "./AreasTeaching/AreasTeaching.jsx";
import PropTypes from "prop-types";

export default function AccordionItem({ question, answer, onClick, openIds, id, isAreaTeaching, ...props}) {
  const itemRef = useRef(null)

  return (
    <li
      className={classes.accordionItem}
    >
        <button
          className={classes.accordionHeader}
          onClick={() => onClick()}
        >
          <img
            className={classes.collapsibleArrow}
            style={
              openIds.includes(id)
                ? {transform: 'rotate(-180deg)'}
                : {transform: 'rotate(0deg)'}
            }
            src="arrow.svg" alt="Открыть ответ"/>
          <p>{question}</p>
        </button>
      <div
        className={classes.accordionCollapse}
        style={
          openIds.includes(id)
            ? { height: itemRef.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className={classes.accordionBody} ref={itemRef}>
          {
            isAreaTeaching ?
              <span className={classes.spanBlockInside}>
                <AreasTeaching
                  points={props.points}
                  number={props.number}
                  price={props.price}
                  profile={props.profile}
                  about={<span dangerouslySetInnerHTML={{__html: props.about}}></span>}
                  proffessions={props.proffessions}
                  companies={props.companies}
                  isMagistratura={props.isMagistratura}
                  isCimk={props.isCimk}
                />
              </span>
              : <span dangerouslySetInnerHTML={{__html: answer}}></span>}
        </div>
      </div>
    </li>
  )
}

AccordionItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  openIds: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  isAreaTeaching: PropTypes.bool.isRequired,
  points: PropTypes.number.isRequired,
  number: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  proffessions: PropTypes.string.isRequired,
  companies: PropTypes.string.isRequired,
  isMagistratura: PropTypes.bool,
  isCimk: PropTypes.bool,
};