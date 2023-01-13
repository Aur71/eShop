import styles from '../../styles/product/Showcase.module.scss';
// COMPONENTS
import Slider from './Slider';
import Info from './Info';
import Actions from './Actions';

const Showcase = () => {
  return (
    <div className={styles.showcase}>
      <Slider />
      <Info />
      <Actions />
    </div>
  );
};

export default Showcase;
