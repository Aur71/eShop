import styles from '../../../../styles/account/orders/my_orders/OrdersFilter.module.scss';
// HOOKS
import { useState } from 'react';

// DATA
import { statusFilter, fromFilter } from '../../../../data/ordersFilter';

// MEDIA
import { AiOutlineDown } from 'react-icons/ai';

const OrdersFilter = ({
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
            {statusFilter.map((item) => {
              return (
                <button
                  key={item.id}
                  className={`${orderStatus === item.name && styles.active}`}
                  onClick={() => setOrderStatus(item.name)}
                >
                  {item.name}
                </button>
              );
            })}
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
            {fromFilter.map((item) => {
              return (
                <button
                  key={item.id}
                  className={`${orderTime === item.name && styles.active}`}
                  onClick={() => setOrderTime(item.name)}
                >
                  {item.name}
                </button>
              );
            })}
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
  );
};

export default OrdersFilter;
