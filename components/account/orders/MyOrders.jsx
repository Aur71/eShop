import styles from '../../../styles/account/orders/MyOrders.module.scss';
// HOOKS
import { useState } from 'react';

// TOOLS
import Link from 'next/link';

// COMPONENTS
import OrdersFilter from './OrdersFilter';

// DATA
import { statusFilter, fromFilter } from '../../../data/ordersFilter';

// MEDIA
import { AiOutlineDown } from 'react-icons/ai';

const MyOrders = ({
  openDetails,
  orderStatus,
  setOrderStatus,
  orderTime,
  setOrderTime,
  productName,
  setProductName,
}) => {
  return (
    <div className={styles.myOrders}>
      <h2>My Orders (5)</h2>

      <OrdersFilter
        orderStatus={orderStatus}
        setOrderStatus={setOrderStatus}
        orderTime={orderTime}
        setOrderTime={setOrderTime}
        productName={productName}
        setProductName={setProductName}
      />

      <div className={styles.orders}>
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
      </div>
    </div>
  );
};

export default MyOrders;
