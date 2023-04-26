import React from "react";
import styles from "./ProductCard.module.css";
import { Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

export default function ProductCard({ restaurant, handleCardClick }) {
  const avgRating = restaurant.avgRating;
  console.log(styles);
  return (
    <div className={styles.card} onClick={() => handleCardClick(restaurant.id)}>
      <div className={styles.cardImage}>
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/${restaurant.cloudinaryImageId}`}
          aria-label={restaurant.name}
        />
      </div>
      <div className={styles.cardTitle}>
        <Typography variant="h5">{restaurant.name}</Typography>
      </div>
      <div className={styles.cusines}>
        <Typography variant="body1" className={styles.secondaryText}>
          {restaurant.cuisines.length ? restaurant.cuisines.join(", ") : ""}
        </Typography>
      </div>
      <div className={styles.sla}>
        <div
          className={`${styles.rating} ${
            avgRating >= 4
              ? styles.green
              : avgRating >= 3 && avgRating < 4
              ? styles.orange
              : styles.red
          }`}
        >
          <StarRateIcon fontSize="small" />
          {restaurant.avgRating}
        </div>
        <div className={styles.dot}>
          <Typography variant="body1">.</Typography>
        </div>

        <div className={styles.estTime}>
          <Typography variant="body1" className={styles.secondaryText}>
            {restaurant.slaString}
          </Typography>
        </div>
        <div className={styles.dot}>
          <Typography variant="body1">.</Typography>
        </div>
        <div className={styles.costForTwo}>
          <Typography variant="body1" className={styles.secondaryText}>
            {restaurant.costForTwoString}
          </Typography>
        </div>
      </div>
    </div>
  );
}
