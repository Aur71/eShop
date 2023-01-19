import styles from '../../../styles/product/slider/Card.module.scss';

// TOOLS
import Link from 'next/link';
import Image from 'next/image';

// MEDIA
import {
  BsStarFill,
  BsStarHalf,
  BsStar,
  BsFillCartFill,
  BsHeart,
} from 'react-icons/bs';
import img from '../../../public/temporary/temp.jpg';

const Card = () => {
  return (
    <article className={styles.card}>
      <button className={styles.favoriteBtn}>
        <BsHeart />
      </button>

      <div className={styles.imgContainer}>
        <Link href='/product/id'>
          <Image src={img} alt='img' />

          <p className={styles.tag}>Top Favorites</p>
        </Link>
      </div>

      <div className={styles.textContainer}>
        <h3>
          <Link href='/product/id'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            vitae hic delectus dolor sit laudantium vero neque velit
            necessitatibus molestias.
          </Link>
        </h3>

        <div className={styles.rating}>
          <BsStarFill className={styles.star} />
          <BsStarFill className={styles.star} />
          <BsStarFill className={styles.star} />
          <BsStarFill className={styles.star} />
          <BsStarHalf className={styles.star} />

          <span>4.5</span>
          <span>(7)</span>
        </div>

        <div className={styles.priceContainer}>
          <div>
            <p>PRP: 29.99$</p>
            <p>23.99$</p>
          </div>

          <button className={styles.buyBtn}>
            <BsFillCartFill />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
