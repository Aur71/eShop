import styles from '../../styles/product/Showcase.module.scss';
// COMPONENTS
import Slider from './Slider';
import Actions from './Actions';

const Showcase = () => {
  return (
    <div className={styles.showcase}>
      <Slider />
      <Actions />
    </div>
  );
};

export default Showcase;
