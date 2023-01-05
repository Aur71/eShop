import styles from '../styles/layout/Footer.module.scss';

// COMPONENTS
import Row1 from '../components/footer/Row1';
import Row2 from '../components/footer/Row2';
import Row3 from '../components/footer/Row3';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.center}>
        <Row1 />

        <div className={styles.line}></div>

        <Row2 />
        <Row3 />
      </div>
    </footer>
  );
};

export default Footer;
