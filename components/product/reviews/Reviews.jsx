import styles from '../../../styles/product/reviews/Reviews.module.scss';

// COMPONENTS
import Stats from './Stats';
import ReviewsContainer from './ReviewsContainer';
import Pagination from './Pagination';

const Reviews = () => {
  return (
    <div className={styles.reviews}>
      <div className={styles.center}>
        <div className={styles.header}>
          <h2>Reviews (28 reviews)</h2>

          <button>Add Review</button>
        </div>

        <Stats />
        <ReviewsContainer />
        <Pagination />
      </div>
    </div>
  );
};

export default Reviews;
