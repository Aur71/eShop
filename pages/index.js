import styles from '../styles/home/Home.module.scss';

// COMPONENTS
import Header from '../components/home/Header';
import Section from '../components/home/section/Section';
import NewsLetter from '../components/home/NewsLetter';

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Section />
      <Section />
      <Section />
      <NewsLetter />
    </div>
  );
}
