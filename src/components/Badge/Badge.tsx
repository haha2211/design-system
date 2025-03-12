import React from "react";
import styles from "./Badge.module.scss";

interface BadgeProps {
  label?: string;
  icon?: React.ReactNode;
  status?: "positive" | "informative" | "negative" | "neutral";
  size?: "small" | "medium" | "large";
  shape?: "rounded" | "square";
}

const Badge: React.FC<BadgeProps> = ({ label, icon, status = "neutral", size = "medium", shape = "rounded" }) => {
  return (
    <span className={`${styles.badge} ${styles[status]} ${styles[size]} ${styles[shape]}`}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {label && <span className={styles.label}>{label}</span>}
    </span>
  );
};

export default Badge;