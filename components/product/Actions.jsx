import styles from '../../styles/product/Actions.module.scss';

import { BsFillCartFill, BsHeart } from 'react-icons/bs';

const Actions = () => {
  return (
    <div className={styles.actions}>
      <div className={styles.center}>
        <p className={styles.prp}>PRP: 29.99$</p>
        <p className={styles.price}>23.99$</p>
        <p className={styles.delivery}>7d Delivery: Sameday</p>
        <p className={styles.stock}>Stock available</p>

        <button className={styles.cartBtn}>
          <span>
            <BsFillCartFill />
          </span>

          <span>Add to cart</span>
        </button>

        <button className={styles.favoriteBtn}>
          <span>
            <BsHeart />
          </span>

          <span>Add to favorite</span>
        </button>
      </div>
    </div>
  );
};

export default Actions;
