import AccordionItem from "./AccordionItem.jsx";
import {useState} from "react";
import classes from "./AccordionItem.module.css";
import PropTypes from "prop-types";

export default function AccordionSection({ infoBlock, header, isAreaTeaching, isMagistratura, isCimk}) {
  const [openIds, setOpenIds] = useState([]);

  const toggleAccordion = (id) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((openId) => openId !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <div className={classes.accordion}>
      <h3 className={classes.header}>{header}</h3>
      <ul className={classes.ul}>
        {infoBlock.map((item, id) => (
          <AccordionItem
            onClick={() => toggleAccordion(id)}
            key={id}
            isOpen={openIds.includes(id)}
            openIds={openIds}
            id={id}
            isAreaTeaching={isAreaTeaching}
            isMagistratura={isMagistratura}
            isCimk={isCimk}
            {...item}
          />
        ))}
      </ul>
    </div>
  );
}

AccordionSection.propTypes = {
  header: PropTypes.string.isRequired,
  isAreaTeaching: PropTypes.bool.isRequired,
  infoBlock: PropTypes.object.isRequired,
  isMagistratura: PropTypes.bool,
  isCimk: PropTypes.bool,
}