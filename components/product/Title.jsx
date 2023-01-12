import styles from '../../styles/product/Title.module.scss';

// MEDIA
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Title = () => {
  return (
    <div className={styles.header}>
      <div className={styles.titleContainer}>
        <p>Product ID: 527312423f2</p>
        <h1>
          Antiderapant pentru covor tip plasa, Cali, poliester, 80 x 180 cm
        </h1>
      </div>

      <div className={styles.reviewsContainer}>
        <p>
          Delivery in: <span>Sibiu</span>
        </p>

        <div className={styles.reviews}>
          <span>
            <BsStarFill />
          </span>
          <span>
            <BsStarFill />
          </span>
          <span>
            <BsStarFill />
          </span>
          <span>
            <BsStarFill />
          </span>
          <span>
            <BsStarFill />
          </span>
          <p>4.86(7)</p>
        </div>
      </div>
    </div>
  );
};

export default Title;
