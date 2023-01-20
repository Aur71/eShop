import styles from '../../styles/cart/Product.module.scss';
// HOOKS
import { useState } from 'react';

// TOOLS
import Link from 'next/link';
import Image from 'next/image';

// MEDIA
import { BiChevronDown } from 'react-icons/bi';
import img from '../../public/temporary/temp.jpg';

const Product = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (e) => {
    setShowOptions(false);
    setQuantity(e.target.textContent);
  };

  console.log(quantity);

  return (
    <article className={styles.product}>
      <div className={styles.info}>
        <div className={styles.imgContainer}>
          <Image src={img} alt='img' />
        </div>

        <div className={styles.titleContainer}>
          <h2>
            <Link href='#'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis, itaque.
            </Link>
          </h2>

          <p>Availability: In stock</p>
        </div>

        <div className={styles.quantityContainer}>
          <div
            className={`${styles.quantity} ${showOptions && styles.active}`}
            onClick={() => setShowOptions(!showOptions)}
          >
            <span>{quantity}</span>
            <BiChevronDown className={styles.icon} />

            <div
              className={`${styles.options} ${showOptions && styles.active}`}
            >
              <button onClick={handleQuantity}>1</button>
              <button onClick={handleQuantity}>2</button>
              <button onClick={handleQuantity}>3</button>
              <button onClick={handleQuantity}>4</button>
              <button onClick={handleQuantity}>5</button>
              <button onClick={handleQuantity}>6</button>
              <button onClick={handleQuantity}>7</button>
              <button onClick={handleQuantity}>8</button>
              <button onClick={handleQuantity}>9</button>
              <button onClick={handleQuantity}>10</button>
              <button onClick={handleQuantity}>11</button>
              <button onClick={handleQuantity}>12</button>
            </div>
          </div>
        </div>

        <div className={styles.actionsContainer}>
          <p>23.99$</p>

          <div className={styles.btnContainer}>
            <button>favorite</button>
            <button>remove</button>
          </div>
        </div>
      </div>

      <div className={styles.price}>
        <div className={styles.container}>
          <p>
            Product cost: <span>23.99$</span>
          </p>
          <p>
            Delivery and processing cost: <span>0$</span>
          </p>
          <p>
            Subtotal: <span>23.99$</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default Product;
