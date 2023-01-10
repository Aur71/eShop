import styles from '../../../styles/home/section/Section.module.scss';
// HOOKS
import { useState } from 'react';

// COMPONENTS
import Slider from './Slider';

const Section = () => {
  const [scrollPoints, setScrollPoints] = useState([]);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Section Title</h2>
      <Slider />

      <div className={styles.pagination}>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </section>
  );
};

export default Section;
