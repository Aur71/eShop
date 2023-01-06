import styles from '../../styles/layout/navbar/NavItems.module.scss';

// TOOLS
import Link from 'next/link';

// MEDIA
import { CiUser, CiHeart } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';

const NavItems = () => {
  return (
    <div className={styles.navItems}>
      <Link href='/' className={styles.logo}>
        LOGO
      </Link>

      <div className={styles.searchbar}>
        <input type='text' placeholder='Search...' />
      </div>

      <div className={styles.icons}>
        <Link href='/' className={styles.account}>
          <CiUser />
        </Link>

        <Link href='/cart' className={styles.favorite}>
          <CiHeart />
        </Link>

        <Link href='/cart' className={styles.cart}>
          {/* <CiShoppingCart /> */}
        </Link>

        <button className={styles.hamburger}>
          <RxHamburgerMenu />
        </button>
      </div>
    </div>
  );
};

export default NavItems;
