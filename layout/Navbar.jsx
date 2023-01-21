import styles from '../styles/layout/navbar/Navbar.module.scss';
// HOOKS
import { useRouter } from 'next/router';

//  COMPONENTS
import NavItems from '../components/navbar/NavItems';
import NavLinks from '../components/navbar/NavLinks';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav
      className={`${styles.navbar} ${
        router.pathname === '/register' && 'disabled'
      } ${router.pathname === '/login' && 'disabled'}`}
    >
      <NavItems />
      <NavLinks />
    </nav>
  );
};

export default Navbar;
