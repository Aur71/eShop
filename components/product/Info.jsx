import styles from '../../styles/product/Info.module.scss';

// MEDIA
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { IoMdCheckmark } from 'react-icons/io';

const Info = () => {
  return (
    <div className={styles.info}>
      <p className={styles.reviews}>
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <span>4.57 (35 reviews)</span>
      </p>

      <p className={styles.recomandation}>
        92% customers recommend the product
      </p>

      <p className={styles.shipping}>
        Shipped to: <span>Sibiu</span>
      </p>

      <ul className={styles.benefits}>
        <h3>benefits:</h3>

        <li>
          <span>
            <IoMdCheckmark />
          </span>
          <span>Free shipping</span>
        </li>

        <li>
          <span>
            <IoMdCheckmark />
          </span>
          <span>Fast delivery (7d max)</span>
        </li>

        <li>
          <span>
            <IoMdCheckmark />
          </span>
          <span>Free return within 30 days</span>
        </li>

        <li>
          <span>
            <IoMdCheckmark />
          </span>
          <span>12 month warranty</span>
        </li>

        <li>
          <span>
            <IoMdCheckmark />
          </span>
          <span>Opening the parcel upon delivery</span>
        </li>
      </ul>
    </div>
  );
};

export default Info;
