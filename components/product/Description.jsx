import styles from '../../styles/product/Description.module.scss';
// HOOKS
import { useState, useRef } from 'react';

// TOOLS
import Image from 'next/image';

// MEDIA
import img from '../../public/slider/slider-1.jpg';

const Description = () => {
  const [showMore, setShowMore] = useState(false);
  const descRef = useRef(null);
  const centerRef = useRef(null);

  const handleDesc = () => {
    setShowMore(!showMore);
    const height = centerRef.current.getBoundingClientRect().height;

    if (!showMore) {
      descRef.current.style.height = `${height}px`;
    } else {
      descRef.current.style.height = `${500}px`;
    }
  };

  return (
    <div
      className={`${styles.desc} ${showMore && styles.active}`}
      ref={descRef}
    >
      <div
        className={`${styles.overlay}  ${showMore && styles.inactive}`}
      ></div>

      <button className={styles.showBtn} onClick={handleDesc}>
        {showMore ? 'show less' : 'show more'}
      </button>

      <div className={styles.center} ref={centerRef}>
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
          quibusdam.
        </h1>

        <Image src={img} alt='temp img' />

        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
          odio.
        </h2>

        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
          laudantium!
        </h3>

        <h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
          cupiditate.
        </h4>

        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, ipsum!
        </h5>

        <h6>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
          aspernatur!
        </h6>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          ipsam quas, blanditiis corporis saepe error repellendus accusantium
          expedita suscipit laudantium eius quia. Laudantium vero neque officiis
          unde! Vero, ullam eaque.
        </p>

        <ul>
          <p>List title</p>
          <li>list item 1</li>
          <li>list item 1</li>
          <li>list item 1</li>
          <li>list item 1</li>
          <li>list item 1</li>
        </ul>

        <ol>
          <p>List title</p>
          <li>list item 1</li>
          <li>list item 1</li>
          <li>list item 1</li>
          <li>list item 1</li>
          <li>list item 1</li>
        </ol>

        <a href='#'>Link</a>
      </div>
    </div>
  );
};

export default Description;
