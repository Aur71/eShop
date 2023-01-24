import styles from '../../../styles/account/orders/OrderDetails.module.scss';

// MEDIA
import { AiOutlineClose } from 'react-icons/ai';

const OrderDetails = ({ closeDetails }) => {
  return (
    <section className={styles.orderDetails}>
      <button className={styles.closeBtn} onClick={closeDetails}>
        <AiOutlineClose />
      </button>

      <div className={styles.header}></div>
    </section>
  );
};

export default OrderDetails;
