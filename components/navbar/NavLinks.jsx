import styles from '../../styles/layout/navbar/NavLinks.module.scss';

// TOOLS
import Link from 'next/link';

const NavLinks = () => {
  return (
    <div className={styles.navLinks}>
      <ul className={styles.center}>
        <li>
          <Link href='#'>products</Link>
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
