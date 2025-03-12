import React, { useState } from "react";
import styles from "./Accordion.module.scss";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <button className={styles.accordion__header} onClick={() => setIsOpen(!isOpen)} >
        {title}
        <svg className={`${styles.accordion__arrow} ${isOpen ? styles.open : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 417.9l17-17L465 209l17-17L448 158.1l-17 17-175 175L81 175l-17-17L30.1 192l17 17L239 401l17 17z"/></svg>
      </button>
      {isOpen && <div className={styles.accordion__content}>{children}</div>}
    </div>
  );
};

export default Accordion;
