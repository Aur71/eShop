import styles from '../../styles/product/Description.module.scss';
// HOOKS
import { useState, useRef, useEffect } from 'react';

// TOOLS
import Image from 'next/image';

// MEDIA
import img from '../../public/slider/slider-1.jpg';

const Description = () => {
  const [showMore, setShowMore] = useState(false);
  const descRef = useRef(null);
  const centerRef = useRef(null);
  const showBtnRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const height = centerRef.current.getBoundingClientRect().height;

    if (height < 500) {
      descRef.current.style.height = `${height}px`;
      centerRef.current.style.paddingBottom = `${2}rem`;
      showBtnRef.current.style.display = 'none';
      overlayRef.current.style.display = 'none';
    }

    // NEED TO ADD A DEPENDENCY WHEN THE DESCRIPTION CHANGES
  }, [descRef, centerRef]);

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
      id='desc'
      className={`${styles.desc} ${showMore && styles.active}`}
      ref={descRef}
    >
      <div
        className={`${styles.overlay}  ${showMore && styles.inactive}`}
        ref={overlayRef}
      ></div>

      <button className={styles.showBtn} onClick={handleDesc} ref={showBtnRef}>
        {showMore ? 'show less' : 'show more'}
      </button>

      <div className={styles.center} ref={centerRef}>
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
          quibusdam.
        </h1>

        <Image src={img} alt='img' />

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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
          distinctio!
        </h6>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
          reprehenderit nam dolore voluptatum sed perferendis nobis cumque,
          alias reiciendis quaerat tempora dolorem dolor non repudiandae
          doloribus, consequatur minus quos sint? Ullam quidem corrupti cum
          quisquam ex ipsum magnam alias consequatur. Sequi ducimus facere
          cupiditate ipsa temporibus, unde soluta expedita tempore eos aliquid
          distinctio, itaque inventore culpa quis numquam illo?
        </p>

        <a href='#'>Link</a>
      </div>
    </div>
  );
};

export default Description;
