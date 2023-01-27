import styles from '../../../styles/account/returns/MyReturns.module.scss';

// COMPONENTS
import Return from './Return';

// MEDIA
import { HiDocumentPlus } from 'react-icons/hi2';

const MyReturns = ({ getReturn, openReturnForm }) => {
  return (
    <div className={styles.myReturns}>
      <div className={styles.header}>
        <h2>My returns</h2>

        <button onClick={openReturnForm}>
          <HiDocumentPlus />
        </button>
      </div>

      <ul className={styles.returnList}>
        {/* IF THERE ARE NOT RETURNS RETURN */}
        {1 === 2 ? (
          <div className={styles.noReturns}>
            <h3>You currently have no return requests</h3>
            <p>
              If, for whatever reason, you are not satisfied with the product
              you received, at eMAG you can return the product very simply and
              easily by filling out the <span>return form</span>.
            </p>
          </div>
        ) : null}

        <Return getReturn={getReturn} />
        <Return getReturn={getReturn} />
        <Return getReturn={getReturn} />
        <Return getReturn={getReturn} />
      </ul>
    </div>
  );
};

export default MyReturns;
