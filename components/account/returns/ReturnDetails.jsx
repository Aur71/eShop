import styles from '../../../styles/account/returns/ReturnDetails.module.scss';

// MEDIA
import { AiOutlineClose, AiOutlineDoubleRight } from 'react-icons/ai';

const ReturnDetails = () => {
  return (
    <div className={styles.returnDetails}>
      <div className={styles.header}>
        <div className={styles.path}>
          <button>Returns</button>
          <AiOutlineDoubleRight className={styles.icon} />
          <p>Return details</p>
        </div>

        <button className={styles.closeBtn}>
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default ReturnDetails;
