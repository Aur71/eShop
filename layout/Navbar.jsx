import styles from '../styles/layout/Navbar.module.scss';

// TOOLS
import Link from 'next/link';

// MEDIA
import { MdAccountCircle, MdShoppingCart } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href='/'>
            e<span>Shop</span>.
          </Link>
        </li>

        <li>
          <Link href='/contact'>contact</Link>
        </li>

        <li>
          <Link href='/about'>about</Link>
        </li>

        <li>
          <Link href='/'>
            <MdAccountCircle />
          </Link>
        </li>

        <li>
          <Link href='/cart'>
            <MdShoppingCart />
          </Link>
        </li>

        <li>
          <button>
            <GiHamburgerMenu />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
