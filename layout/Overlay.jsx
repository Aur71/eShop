import styles from '../styles/layout/Overlay.module.scss';
// HOOKS
import { useGlobalContext } from '../context/context';

const Overlay = () => {
  const { showOverlay } = useGlobalContext();

  return (
    <div className={`${styles.overlay}  ${showOverlay && styles.active}`}></div>
  );
};

export default Overlay;
