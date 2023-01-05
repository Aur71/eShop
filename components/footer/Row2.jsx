import styles from '../../styles/layout/Footer.module.scss';

// MEDIA
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const Row2 = () => {
  return (
    <section className={styles.row2}>
      <a href='#'>
        <BsFacebook />
      </a>

      <a href='#'>
        <AiFillInstagram />
      </a>

      <a href='#'>
        <AiFillTwitterCircle />
      </a>

      <a href='#'>
        <MdEmail />
      </a>
    </section>
  );
};

export default Row2;
