import styles from '../../../styles/account/returns/ReturnDetails.module.scss';

// COMPONENTS
import Product from './Product';

// MEDIA
import { AiOutlineClose, AiOutlineDoubleRight } from 'react-icons/ai';

const ReturnDetails = ({ closeShowDetails }) => {
  return (
    <div className={styles.returnDetails}>
      <div className={styles.header}>
        <div className={styles.path}>
          <button onClick={closeShowDetails}>Returns</button>
          <AiOutlineDoubleRight className={styles.icon} />
          <p>Return details</p>
        </div>

        <button className={styles.closeBtn} onClick={closeShowDetails}>
          <AiOutlineClose />
        </button>
      </div>

      <h3>Return no. 292427516</h3>

      <div className={styles.info}>
        <p>
          <span>Returned on:</span>
          <span>19 decembrie 2022, 11:41</span>
        </p>
        <p>
          <span>Total:</span>
          <span>31,39$</span>
        </p>
      </div>

      <div className={styles.products}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default ReturnDetails;
