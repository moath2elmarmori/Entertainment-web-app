import StarRatings from "react-star-ratings";
import styles from "../../styles/ShowDetails.module.css";

const StarsRating = ({ starsRating }) => {
  return (
    <div className={`${styles["stars-rating-container"]}`}>
      <h1>{starsRating}</h1>
      <StarRatings
        rating={starsRating}
        numberOfStars={5}
        starRatedColor="white"
        starEmptyColor="#6c6c6c"
        starSpacing="0"
        starDimension="17px"
      />
    </div>
  );
};

export default StarsRating;
