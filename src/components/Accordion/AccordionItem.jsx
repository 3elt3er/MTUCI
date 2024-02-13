import classes from "./AccordionItem.module.css";
import { useRef } from "react";
import AreasTeaching from "./AreasTeaching/AreasTeaching.jsx";
export default function AccordionItem({ question, answer, onClick, openIds, id, isAreaTeaching}) {
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
            src="public/arrow.svg" alt="Открыть ответ"/>
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
          {isAreaTeaching ? <span><AreasTeaching/></span> : <span>{answer}</span>}
        </div>
      </div>
    </li>
  )
}
