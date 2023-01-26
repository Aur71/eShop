import styles from '../../../../styles/account/orders/order_details/Product.module.scss';
// HOOKS
import { useState } from 'react';
import { useAccountContext } from '../../../../context/accountContext';

// TOOKS
import Image from 'next/image';
import Link from 'next/link';

// DATA
import { rating } from '../../../../data/rating';

// MEDIA
import img from '../../../../public/temporary/temp.jpg';

const Product = () => {
  const { handleReview } = useAccountContext();
  const [stars, setStars] = useState(0);
  const [tag, setTag] = useState('Add review');

  const handleStars = (num, name) => {
    setStars(num);
    setTag(name);

    if (num === 0) {
      setTag('Add review');
    }
  };

  return (
    <article className={styles.product}>
      <div className={styles.imgContainer}>
        <Image src={img} alt='img' />
      </div>

      <div className={styles.infoContainer}>
        <h4>
          <Link href='#'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
            quibusdam.
          </Link>
        </h4>

        <div className={styles.rating}>
          {rating.map((item) => {
            return (
              <button
                key={item.id}
                className={`${styles.starBtn} ${
                  item.stars <= stars && styles.active
                }`}
                onClick={() => handleReview(item.stars)}
                onMouseOver={() => handleStars(item.stars, item.name)}
                onMouseLeave={() => handleStars(0)}
              >
                {item.icon}
              </button>
            );
          })}

          <button className={styles.reviewBtn} onClick={() => handleReview(0)}>
            {tag}
          </button>
        </div>

        <div className={styles.priceing}>
          <p>16.39$</p>
          <p>1 x</p>
        </div>
      </div>
    </article>
  );
};

export default Product;
