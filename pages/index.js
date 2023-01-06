import styles from '../styles/home/Home.module.scss';

// COMPONENTS
import Header from '../components/home/header/Header';

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
    </div>
  );
}
