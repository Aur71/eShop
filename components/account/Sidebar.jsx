import styles from '../../styles/account/components/Sidebar.module.scss';

// DATA
import { data } from '../../data/accountSidebar';

// TOOLS
import Link from 'next/link';

// MEDIA
import { AiOutlineRight } from 'react-icons/ai';

const Sidebar = ({ activeWindow, setActiveWindow }) => {
  const handleActiveWindow = (e) => {
    setActiveWindow(e.target.textContent);
    console.log(e.target.value);
  };

  return (
    <aside className={styles.sidebar}>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <button
                onClick={() => setActiveWindow(item.name)}
                className={`${activeWindow === item.name && styles.active}`}
              >
                {item.name} <AiOutlineRight className={styles.icon} />
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
