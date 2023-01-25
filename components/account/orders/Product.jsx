import styles from '../../../styles/account/orders/Product.module.scss';
// HOOKS
import { useState, useEffect } from 'react';
import { useAccountContext } from '../../../context/accountContext';

// TOOKS
import Image from 'next/image';
import Link from 'next/link';

// MEDIA
import img from '../../../public/temporary/temp.jpg';
import { BsStarFill } from 'react-icons/bs';

const Product = () => {
  const [starCount, setStarCount] = useState(0);
  const [rating, setRating] = useState('Add a review');
  const { handleReview } = useAccountContext();

  useEffect(() => {
    if (starCount === 0) {
      setRating('Add a review');
    }
    if (starCount === 1) {
      setRating('Very bad');
    }
    if (starCount === 2) {
      setRating('Bad');
    }
    if (starCount === 3) {
      setRating('Decent');
    }
    if (starCount === 4) {
      setRating('Good');
    }
    if (starCount === 5) {
      setRating('Excellent');
    }
  }, [starCount]);

  return (
    <article className={styles.product}>
      <Image src={img} alt='img' />

      <div className={styles.productInfo}>
        <h4>
          <Link href='#'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
            quibusdam.
          </Link>
        </h4>

        <div className={styles.rating}>
          <button
            onMouseOver={() => setStarCount(1)}
            onMouseLeave={() => setStarCount(0)}
            onClick={() => handleReview(1)}
            className={`${starCount >= 1 && styles.active}`}
          >
            <BsStarFill />
          </button>

          <button
            onMouseOver={() => setStarCount(2)}
            onMouseLeave={() => setStarCount(0)}
            onClick={() => handleReview(2)}
            className={`${starCount >= 2 && styles.active}`}
          >
            <BsStarFill />
          </button>

          <button
            onMouseOver={() => setStarCount(3)}
            onMouseLeave={() => setStarCount(0)}
            onClick={() => handleReview(3)}
            className={`${starCount >= 3 && styles.active}`}
          >
            <BsStarFill />
          </button>

          <button
            onMouseOver={() => setStarCount(4)}
            onMouseLeave={() => setStarCount(0)}
            onClick={() => handleReview(4)}
            className={`${starCount >= 4 && styles.active}`}
          >
            <BsStarFill />
          </button>

          <button
            onMouseOver={() => setStarCount(5)}
            onMouseLeave={() => setStarCount(0)}
            onClick={() => handleReview(5)}
            className={`${starCount >= 5 && styles.active}`}
          >
            <BsStarFill />
          </button>

          <p>{rating}</p>
        </div>
      </div>

      <div className={styles.priceing}>
        <p>16.39$</p>
        <p>1 x</p>
      </div>
    </article>
  );
};

export default Product;
