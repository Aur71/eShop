import styles from '../styles/layout/menu/Menu.module.scss';
// HOOKS
import { useGlobalContext } from '../context/context';
import { useRouter } from 'next/router';

// COMPONENTS
import MegaMenu from '../components/menu/MegaMenu';

// DATA
import { menuData } from '../data/menuData';

const Menu = () => {
  const router = useRouter();

  const { showMenu, showMegaMenu, setShowMegaMenu, setMegaMenuItems } =
    useGlobalContext();

  const handleMegaMenu = (items, e) => {
    setMegaMenuItems(items);
    setShowMegaMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMegaMenu(false);
    setMegaMenuItems([]);
  };

  return (
    <div
      className={`${styles.menu} ${showMenu && styles.active} ${
        showMegaMenu && styles.acitveMegaMenu
      } ${router.pathname === '/register' && 'disabled'} ${
        router.pathname === '/login' && 'disabled'
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.center}>
        <aside className={styles.sidebar}>
          <ul>
            {menuData.map((item) => {
              return (
                <li
                  key={item.id}
                  onMouseOver={(e) => handleMegaMenu(item.items, e)}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </li>
              );
            })}
          </ul>
        </aside>

        <MegaMenu />
      </div>
    </div>
  );
};

export default Menu;
