import styles from '../../../../styles/account/orders/my_orders/MyOrders.module.scss';

// TOOLS
import Link from 'next/link';

// COMPONENTS
import OrdersFilter from './OrdersFilter';
import Order from './Order';

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
        <Order openDetails={openDetails} />
        <Order openDetails={openDetails} />
        <Order openDetails={openDetails} />
      </div>
    </div>
  );
};

export default MyOrders;
