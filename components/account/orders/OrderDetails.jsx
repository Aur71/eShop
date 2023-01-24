import styles from '../../../styles/account/orders/OrderDetails.module.scss';
// HOOKS
import { useState, useEffect } from 'react';

// TOOLS
import Image from 'next/image';
import Link from 'next/link';

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

        <div className={styles.products}>
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
