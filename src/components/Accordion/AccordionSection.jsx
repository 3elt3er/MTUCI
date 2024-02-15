import AccordionItem from "./AccordionItem.jsx";
import { useState } from "react";
import classes from "./AccordionItem.module.css";

export default function AccordionSection({ infoBlock, header, isAreaTeaching}) {
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
            {...item}
          />
        ))}
      </ul>
    </div>
  );
}