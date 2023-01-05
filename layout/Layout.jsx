import styles from '../styles/layout/Layout.module.scss';

// COMPONENETS
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className={styles.layout}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
