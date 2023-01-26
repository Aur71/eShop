import styles from '../../../../styles/account/orders/order_details/OrderDetails.module.scss';

// COMPONENTS
import Product from './Product';

// MEDIA
import { AiOutlineClose, AiOutlineDoubleRight } from 'react-icons/ai';

const OrderDetails = ({ closeDetails }) => {
  return (
    <section className={styles.orderDetails}>
      <div className={styles.header}>
        <div className={styles.path}>
          <button onClick={closeDetails}>Orders</button>
          <AiOutlineDoubleRight className={styles.icon} />
          <p>Order Details</p>
        </div>

        <button className={styles.closeBtn} onClick={closeDetails}>
          <AiOutlineClose />
        </button>
      </div>

      <h3>Order no. 292427516</h3>

      <div className={styles.info}>
        <p>
          <span>Ordered on:</span>
          <span>19 decembrie 2022, 11:41</span>
        </p>

        <p>
          <span>Total:</span>
          <span>31,39$</span>
        </p>
      </div>

      <div className={styles.products}>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default OrderDetails;
