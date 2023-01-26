import styles from '../../../../styles/account/orders/my_orders/Order.module.scss';

// TOOLS
import Link from 'next/link';

const Order = ({ openDetails }) => {
  return (
    <article className={styles.order}>
      <div className={styles.orderNumber}>
        <h3>
          <Link href='#'>Order no. 292427516</Link>
        </h3>

        <button onClick={openDetails}>order details</button>
      </div>

      <div className={styles.line}></div>

      <div className={styles.orderInfo}>
        <p>Ordered on: December 19, 2022, 11:41</p>
        <p>Total: 31.39$</p>
        <p>
          Status: <span>delivered</span>
        </p>
      </div>
    </article>
  );
};

export default Order;
