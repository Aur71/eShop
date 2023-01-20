import styles from '../../styles/favorite/Item.module.scss';

// TOOLS
import Image from 'next/image';
import Link from 'next/link';

// MEDIA
import img from '../../public/temporary/temp.jpg';
// MEDIA
import {
  BsStarFill,
  BsStarHalf,
  BsStar,
  BsFillCartFill,
  BsTrash,
} from 'react-icons/bs';

const Item = () => {
  return (
    <article className={styles.item}>
      <div className={styles.imgContainer}>
        <Image src={img} alt='img' />
      </div>

      <div className={styles.titleContainer}>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          sit odio quaerat sapiente illo atque animi dicta minima!
          Reprehenderit, magni.
        </h2>

        <p>
          <BsStarFill className={styles.icon} />
          <BsStarFill className={styles.icon} />
          <BsStarFill className={styles.icon} />
          <BsStarFill className={styles.icon} />
          <BsStarFill className={styles.icon} />

          <span>4.79 (23)</span>
        </p>
      </div>

      <div className={styles.infoContainer}>
        <p>in stock</p>
        <p>PRP: 29,99 Lei</p>
        <p>23.99$</p>

        <div className={styles.btnsContainer}>
          <button>
            <span>
              <BsFillCartFill />
            </span>

            <span>Add to cart</span>
          </button>

          <button>
            <span>
              <BsTrash />
            </span>

            <span>Remove</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Item;
