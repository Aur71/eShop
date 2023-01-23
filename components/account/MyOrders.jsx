import styles from '../../styles/account/components/MyOrders.module.scss';
// HOOKS
import { useState } from 'react';

// MEDIA
import { AiOutlineDown } from 'react-icons/ai';

const MyOrders = () => {
  return (
    <div className={styles.myOrders}>
      <h2>My Orders (5)</h2>

      <div className={styles.filters}>
        <div className={styles.options}>
          <span>status:</span>

          <div>
            <span>
              all orders <AiOutlineDown className={styles.icon} />
            </span>

            <div className={`${styles.dropDown}`}>
              <button>all orders</button>
              <button>active orders</button>
              <button>canceled orders</button>
            </div>
          </div>
        </div>

        <div className={styles.options}>
          <span>from:</span>

          <div>
            <span>
              last month <AiOutlineDown className={styles.icon} />
            </span>

            <div className={styles.dropDown}>
              <button>last month</button>
              <button>last 3 months</button>
              <button>last 6 months</button>
              <button>last year</button>
              <button>all</button>
            </div>
          </div>
        </div>

        <input type='text' placeholder='Product name' />
      </div>

      <div className={styles.orders}>
        <article className={styles.order}>order</article>
        <article className={styles.order}>order</article>
        <article className={styles.order}>order</article>
        <article className={styles.order}>order</article>
      </div>
    </div>
  );
};

export default MyOrders;
