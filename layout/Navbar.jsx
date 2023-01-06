import styles from '../styles/layout/navbar/Navbar.module.scss';

//  COMPONENTS
import NavItems from '../components/navbar/NavItems';
import NavLinks from '../components/navbar/NavLinks';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavItems />
      <NavLinks />
    </nav>
  );
};

export default Navbar;
