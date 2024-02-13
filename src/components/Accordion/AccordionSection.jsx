import AccordionItem from "./AccordionItem.jsx";
import { useState } from "react";
import classes from "./AccordionItem.module.css";

export default function AccordionSection({ infoBlock, isAreaTeaching}) {
  const [openIds, setOpenIds] = useState([]);

  const toggleAccordion = (id) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((openId) => openId !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <ul className={classes.accordion}>
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
  );
}