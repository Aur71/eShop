import styles from '../../../../styles/account/returns/return_form/ReturnForm.module.scss';

// COMPONENTS
import ProgressBar from './ProgressBar';

// MEDIA
import { AiOutlineClose } from 'react-icons/ai';

const ReturnForm = ({ closeReturnForm }) => {
  return (
    <section className={styles.returnForm}>
      <div className={styles.header}>
        <h3>Product return form</h3>

        <button onClick={closeReturnForm}>
          <AiOutlineClose />
        </button>
      </div>

      {/* IF THERE ARE NO PRODUCTS */}
      {1 === 2 ? (
        <div className={styles.noProducts}>
          <h2>You currently do not have any products eligible for return.</h2>
        </div>
      ) : null}
    </section>
  );
};

export default ReturnForm;
