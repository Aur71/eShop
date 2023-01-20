import styles from '../../styles/cart/CheckOut.module.scss';

// MEDIA
import { AiOutlineDoubleRight } from 'react-icons/ai';

const CheckOut = () => {
  return (
    <div className={styles.checkOut}>
      <div className={styles.summory}>
        <h2>Order summary</h2>

        <p>
          Product cost: <span>23.99$</span>
        </p>

        <p>
          Delivery cost: <span>23.99$</span>
        </p>
      </div>

      <div className={styles.line}></div>

      <div className={styles.total}>
        <h3>Total:</h3>
        <h4>23.99$</h4>

        <button>
          <span>
            <AiOutlineDoubleRight />
          </span>
          <span>Next</span>
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
