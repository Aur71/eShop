import styles from '../../../styles/account/orders/MyOrders.module.scss';
// HOOKS
import { useState } from 'react';

// TOOLS
import Link from 'next/link';

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
  const [showStatusDropDown, setShowStatusDropDown] = useState(false);
  const [showTimeDropDown, setShowTimeDropDown] = useState(false);

  const openStatusDropDown = () => {
    setShowTimeDropDown(false);
    setShowStatusDropDown(!showStatusDropDown);
  };

  const openTimeDropDown = () => {
    setShowStatusDropDown(false);
    setShowTimeDropDown(!showTimeDropDown);
  };

  return (
    <div className={styles.myOrders}>
      <h2>My Orders (5)</h2>

      <div className={styles.filters}>
        <div className={styles.options}>
          <span>status:</span>

          <div onClick={openStatusDropDown}>
            <span>
              {orderStatus} <AiOutlineDown className={styles.icon} />
            </span>

            <div
              className={`${styles.dropDown} ${
                showStatusDropDown && styles.active
              }`}
            >
              <button
                className={`${orderStatus === 'all orders' && styles.active}`}
                onClick={(e) => setOrderStatus(e.target.textContent)}
              >
                all orders
              </button>

              <button
                className={`${
                  orderStatus === 'active orders' && styles.active
                }`}
                onClick={(e) => setOrderStatus(e.target.textContent)}
              >
                active orders
              </button>

              <button
                className={`${
                  orderStatus === 'canceled orders' && styles.active
                }`}
                onClick={(e) => setOrderStatus(e.target.textContent)}
              >
                canceled orders
              </button>
            </div>
          </div>
        </div>

        <div className={styles.options}>
          <span>from:</span>

          <div onClick={openTimeDropDown}>
            <span>
              {orderTime} <AiOutlineDown className={styles.icon} />
            </span>

            <div
              className={`${styles.dropDown} ${
                showTimeDropDown && styles.active
              }`}
            >
              <button
                className={`${orderTime === 'all orders' && styles.active}`}
                onClick={(e) => setOrderTime(e.target.textContent)}
              >
                all orders
              </button>

              <button
                className={`${orderTime === 'last month' && styles.active}`}
                onClick={(e) => setOrderTime(e.target.textContent)}
              >
                last month
              </button>

              <button
                className={`${orderTime === 'last 3 months' && styles.active}`}
                onClick={(e) => setOrderTime(e.target.textContent)}
              >
                last 3 months
              </button>

              <button
                className={`${orderTime === 'last 6 months' && styles.active}`}
                onClick={(e) => setOrderTime(e.target.textContent)}
              >
                last 6 months
              </button>

              <button
                className={`${orderTime === 'last year' && styles.active}`}
                onClick={(e) => setOrderTime(e.target.textContent)}
              >
                last year
              </button>
            </div>
          </div>
        </div>

        <input
          type='text'
          placeholder='Product name'
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>

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
