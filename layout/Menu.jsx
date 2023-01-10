import styles from '../styles/layout/menu/Menu.module.scss';
// HOOKS
import { useGlobalContext } from '../context/context';

// COMPONENTS
import MegaMenu from '../components/menu/MegaMenu';

// DATA
import { menuData } from '../data/menuData';

const Menu = () => {
  const { showMenu, showMegaMenu, setShowMegaMenu } = useGlobalContext();

  return (
    <div
      className={`${styles.menu} ${showMenu && styles.active} ${
        showMegaMenu && styles.acitveMegaMenu
      }`}
      onMouseLeave={() => setShowMegaMenu(false)}
    >
      <div className={styles.center}>
        <aside className={styles.sidebar}>
          <ul>
            {menuData.map((item) => {
              return (
                <li key={item.id} onMouseOver={() => setShowMegaMenu(true)}>
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
