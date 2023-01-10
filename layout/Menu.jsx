import styles from '../styles/layout/menu/Menu.module.scss';
// HOOKS
import { useGlobalContext } from '../context/context';

// COMPONENTS
import MegaMenu from '../components/menu/MegaMenu';

// DATA
import { menuData } from '../data/menuData';

const Menu = () => {
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
