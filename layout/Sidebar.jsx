import styles from '../styles/layout/Sidebar.module.scss';
// HOOKS
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside
      className={`${styles.sidebar} ${
        router.pathname === '/register' && 'disabled'
      } ${router.pathname === '/login' && 'disabled'}`}
    ></aside>
  );
};

export default Sidebar;
