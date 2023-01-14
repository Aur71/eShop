import styles from '../../../styles/product/showcase/Showcase.module.scss';

// COMPONENTS
import Slider from './Slider';
import Info from './Info';
import Actions from './Actions';

const Showcase = () => {
  return (
    <div className={styles.showcase}>
      <div className={styles.center}>
        <Slider />
        <Info />
        <Actions />
      </div>
    </div>
  );
};

export default Showcase;
