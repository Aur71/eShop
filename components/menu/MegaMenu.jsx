import styles from '../../styles/layout/menu/MegaMenu.module.scss';
// HOOKS
import { useGlobalContext } from '../../context/context';

const MegaMenu = () => {
  const { showMegaMenu } = useGlobalContext();
  return (
    <div
      className={`${styles.megaMenu} ${showMegaMenu && styles.active}`}
    ></div>
  );
};

export default MegaMenu;
