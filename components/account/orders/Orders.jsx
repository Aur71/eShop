import styles from '../../../styles/account/orders/Orders.module.scss';
// HOOKS
import { useState } from 'react';

// COMPONENTS
import MyOrders from './MyOrders';
import OrderDetails from './OrderDetails';

const Orders = () => {
  return (
    <section className={styles.orders}>
      <MyOrders />
      <OrderDetails />
    </section>
  );
};

export default Orders;
