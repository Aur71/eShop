import styles from '../styles/layout/menu/Menu.module.scss';

// DATA
import { menuData } from '../data/menuData';

const Menu = () => {
  // NEED TO ADD GLOBAL CONTEXT OR REDUX
  return (
    <div className={styles.menu}>
      <div className={styles.center}>
        <aside className={styles.sidebar}>
          <ul>
            {menuData.map((item) => {
              return (
                <li key={item.id}>
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </li>
              );
            })}
          </ul>
        </aside>

        <div className={styles.dropDown}></div>
      </div>
    </div>
  );
};

export default Menu;
