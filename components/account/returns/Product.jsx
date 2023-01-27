import styles from '../../../styles/account/returns/Product.module.scss';

// TOOLS
import Image from 'next/image';
import Link from 'next/link';

// MEDIA
import img from '../../../public/temporary/temp.jpg';

const Product = () => {
  return (
    <article className={styles.product}>
      <div className={styles.productInfo}>
        <div className={styles.imgContainer}>
          <Image src={img} alt='img' />
        </div>

        <h4>
          <Link href='#'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            repellat!
          </Link>
        </h4>

        <div className={styles.priceing}>
          <p>32.99$</p>
          <p>2 x</p>
        </div>
      </div>
    </article>
  );
};

export default Product;
