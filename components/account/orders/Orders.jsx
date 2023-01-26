import styles from '../../../styles/account/orders/Orders.module.scss';
// HOOKS
import { useState } from 'react';

// COMPONENTS
import MyOrders from './my_orders/MyOrders';
import OrderDetails from './order_details/OrderDetails';

const Orders = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [orderStatus, setOrderStatus] = useState('all orders');
  const [orderTime, setOrderTime] = useState('all orders');
  const [productName, setProductName] = useState('');

  const openDetails = () => {
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
  };

  return (
    <section className={styles.orders}>
      {showDetails ? (
        <OrderDetails closeDetails={closeDetails} />
      ) : (
        <MyOrders
          openDetails={openDetails}
          orderStatus={orderStatus}
          setOrderStatus={setOrderStatus}
          orderTime={orderTime}
          setOrderTime={setOrderTime}
          productName={productName}
          setProductName={setProductName}
        />
      )}
    </section>
  );
};

export default Orders;
