import styles from '../styles/layout/Sidebar.module.scss';
// HOOKS
import { useState } from 'react';

// TOOLS
import Link from 'next/link';

// MEDIA
import { MdClose, MdAccountCircle } from 'react-icons/md';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <aside className={`${styles.sidebar} ${showSidebar && styles.active}`}>
      <div className={styles.header}>
        <Link href='/'>
          e<span>Shop</span>.
        </Link>

        <button>
          <MdClose className={styles.icon} />
        </button>
      </div>

      <ul className={styles.links}>
        <li>
          <Link href='/'>home</Link>
        </li>

        <li>
          <Link href='/about'>about</Link>
        </li>

        <li>
          <Link href='/contact'>contact</Link>
        </li>

        <li>
          <Link href='/cart'>support</Link>
        </li>

        <li>
          <Link href='/cart'>faq</Link>
        </li>
      </ul>

      <Link href='#' className={styles.accountIcon}>
        <MdAccountCircle />
      </Link>
    </aside>
  );
};

export default Sidebar;
