import styles from '../../../styles/product/reviews/ReviewsContainer.module.scss';

// COMPONENETS
import Review from './Review';

const ReviewsContainer = () => {
  return (
    <div className={styles.reviewsContainer}>
      <Review />
      <Review />
      <Review />
      <Review />
    </div>
  );
};

export default ReviewsContainer;
