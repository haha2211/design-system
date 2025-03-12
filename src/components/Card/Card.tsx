import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
  image: string;
  title: string;
  price: string;
  discount?: string;
  badge?: string;
  isWishlisted?: boolean;
  onWishlistToggle?: () => void;
  href?: string;
}

const Card: React.FC<CardProps> = ({ 
  image, 
  title, 
  price, 
  discount, 
  badge, 
  isWishlisted = false, 
  onWishlistToggle, 
  href 
}) => {
  return (
    <div className={styles.card}>
      <a className={styles.card__link} href={href} aria-labelledby="card-title">
        <div className={styles.card__imageWrapper}>
          {badge && <span className={styles.card__badge}>{badge}</span>}
          <img src={image} alt={title} className={styles.card__image} />
          <button 
            className={`${styles.card__wishlist} ${isWishlisted ? styles.active : ""}`} 
            onClick={(e) => {
              e.preventDefault(); // 링크 클릭 방지
              onWishlistToggle && onWishlistToggle();
            }}
            aria-label={isWishlisted ? "찜 취소" : "찜하기"}
          >
            ❤️
          </button>
        </div>
        <div className={styles.card__info}>
          <h3 id="card-title" className={styles.card__title}>{title}</h3>
          <div className={styles.card__pricing}>
            {discount && <span className={styles.card__discount}>{discount}</span>}
            <span className={styles.card__price}>{price}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
