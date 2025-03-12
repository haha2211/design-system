import React from "react";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: "small" | "medium" | "large" | "xlarge";
  shape?: "circle" | "square";
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, initials, size = "medium", shape = "circle" }) => {
  return (
    <div className={`${styles.avatar} ${styles[size]} ${styles[shape]}`}>
      {src ? <img src={src} alt={alt} className={styles.image} /> : <span className={styles.initials}>{initials}</span>}
    </div>
  );
};

export default Avatar;