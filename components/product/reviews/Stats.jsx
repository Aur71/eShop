import styles from '../../../styles/product/reviews/Stats.module.scss';
// HOOKS
import { useState } from 'react';

// MEDIA
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { AiFillLike } from 'react-icons/ai';

const Stats = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridItem}>
        <h3>4.86</h3>
        <p>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </p>

        <p>28 reviews</p>
      </div>

      <div className={styles.gridItem}>
        <div className={styles.row}>
          <button>5 stars</button>

          <div className={styles.bar}>
            <div className={styles.barFill}></div>
          </div>

          <p>(24)</p>
        </div>

        <div className={styles.row}>
          <button>4 stars</button>

          <div className={styles.bar}>
            <div className={styles.barFill}></div>
          </div>

          <p>(24)</p>
        </div>

        <div className={styles.row}>
          <button>3 stars</button>

          <div className={styles.bar}>
            <div className={styles.barFill}></div>
          </div>

          <p>(24)</p>
        </div>

        <div className={styles.row}>
          <button>2 stars</button>

          <div className={styles.bar}>
            <div className={styles.barFill}></div>
          </div>

          <p>(24)</p>
        </div>

        <div className={styles.row}>
          <button>1 star</button>

          <div className={styles.bar}>
            <div className={styles.barFill}></div>
          </div>

          <p>(24)</p>
        </div>
      </div>

      <div className={styles.gridItem}>
        <IoCheckmarkCircleSharp className={styles.icon} />

        <p>37</p>

        <p>Reviews from buyers</p>
      </div>

      <div className={styles.gridItem}>
        <AiFillLike className={styles.icon} />

        <p>95%</p>

        <p>Recommend this product</p>
      </div>

      <div className={styles.gridItem}>
        <h3>Have you used this product?</h3>
        <p>Give your opinion by rating the product</p>

        <div className={styles.rating}>
          <button>
            <BsStarFill />
          </button>

          <button>
            <BsStarFill />
          </button>

          <button>
            <BsStarFill />
          </button>

          <button>
            <BsStarFill />
          </button>

          <button>
            <BsStarFill />
          </button>
        </div>

        <button>Add Review</button>
      </div>
    </div>
  );
};

export default Stats;
