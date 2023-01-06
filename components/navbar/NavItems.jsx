import styles from '../../styles/layout/navbar/NavItems.module.scss';

// TOOLS
import Link from 'next/link';
import Image from 'next/image';

// MEDIA
import logo from '../../public/logo.png';
import { CiUser, CiHeart } from 'react-icons/ci';
import { GiShoppingCart } from 'react-icons/gi';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';
import { BsSearch } from 'react-icons/bs';

const NavItems = () => {
  return (
    <div className={styles.navItems}>
      {/* LOGO */}
      <Link href='/' className={styles.logo}>
        <Image src={logo} alt='logo' />
      </Link>

      {/* SEARCHBAR */}
      <div className={styles.searchbar}>
        <input type='text' placeholder='Search...' />

        <div className={styles.iconsContainer}>
          <button>
            <VscChromeClose />
          </button>

          <button>
            <BsSearch />
          </button>
        </div>
      </div>

      {/* ICONS */}
      <div className={styles.icons}>
        <Link href='#' className={styles.account}>
          <CiUser />
          <span>my account</span>
        </Link>

        <Link href='#' className={styles.favorite}>
          <CiHeart />
          <span>favorite</span>
        </Link>

        <Link href='/cart' className={styles.cart}>
          <GiShoppingCart />
          <span>cart</span>
        </Link>

        <button className={styles.hamburger}>
          <VscMenu />
        </button>
      </div>
    </div>
  );
};

export default NavItems;
