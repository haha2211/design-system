import React, { useState } from "react";
import styles from "./Tooltip.module.scss";

interface TooltipProps {
  title: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.accordion__header}>
        {title}
      </button>
      {isOpen && <div className={styles.accordion__content}>{children}</div>}
    </div>

  );
};

export default Tooltip;
