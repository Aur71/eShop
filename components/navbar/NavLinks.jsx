import styles from '../../styles/layout/navbar/NavLinks.module.scss';
// HOOKS
import { useGlobalContext } from '../../context/context';

// TOOLS
import Link from 'next/link';

const NavLinks = () => {
  const { showMenu, handleMenu } = useGlobalContext();

  return (
    <div className={styles.navLinks}>
      <ul className={styles.center}>
        <li>
          <button
            className={`${showMenu && styles.active}`}
            onClick={handleMenu}
          >
            products
          </button>
        </li>

        <li>
          <Link href='/contact'>contact</Link>
        </li>

        <li>
          <Link href='#'>faq</Link>
        </li>

        <li>
          <Link href='#'>support</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
