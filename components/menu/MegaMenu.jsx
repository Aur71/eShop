import styles from '../../styles/layout/menu/MegaMenu.module.scss';
// HOOKS
import { useGlobalContext } from '../../context/context';

// TOOLS
import Link from 'next/link';

const MegaMenu = () => {
  const { showMegaMenu, megaMenuItems } = useGlobalContext();
  return (
    <div className={`${styles.megaMenu} ${showMegaMenu && styles.active}`}>
      {megaMenuItems.map((item) => {
        return (
          <ul key={item.id} className={styles.list}>
            <h5>{item.title}</h5>

            {item.links.map((link, index) => {
              return (
                <li key={index}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default MegaMenu;
