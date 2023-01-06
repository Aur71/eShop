import styles from '../../../styles/home/header/Header.module.scss';

// COMPONENTS
import Menu from './Menu';
import Slider from './Slider';

const Header = () => {
  return (
    <section className={styles.header}>
      <Menu />
      <Slider />
    </section>
  );
};

export default Header;
