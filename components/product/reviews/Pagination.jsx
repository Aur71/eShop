import styles from '../../../styles/product/reviews/Pagination.module.scss';

// MEDIA
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <button>
        <AiOutlineLeft />
      </button>

      <div className={styles.pages}>
        <button className={styles.active}>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>

      <button>
        <AiOutlineRight />
      </button>
    </div>
  );
};

export default Pagination;
