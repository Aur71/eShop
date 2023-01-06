import styles from '../../styles/layout/navbar/NavLinks.module.scss';

// HOOKS
import { useRouter } from 'next/router';

// TOOLS
import Link from 'next/link';

const NavLinks = () => {
  const router = useRouter();

  return (
    <div className={styles.navLinks}>
      <ul className={styles.center}>
        <li>
          <Link
            href='#'
            className={`${router.pathname === '/' && styles.active}`}
          >
            products
          </Link>
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
