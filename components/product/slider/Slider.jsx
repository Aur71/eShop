import styles from '../../../styles/product/slider/Slider.module.scss';
// HOOKS
import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

// MEDIA
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

// COMPONENETS
import Card from './Card';

const Slider = () => {
  const centerRef = useRef(null);
  const sliderRef = useRef(null);
  const { events } = useDraggable(sliderRef);

  // SLIDE LEFT EVENT
  const slideLeft = () => {
    const sliderWidth = centerRef.current.getBoundingClientRect().width;

    sliderRef.current.style.scrollBehavior = 'smooth';
    sliderRef.current.scrollLeft -= sliderWidth;
    sliderRef.current.style.scrollBehavior = 'auto';
  };

  // SLIDE RIGHT EVENT
  const slideRight = () => {
    const sliderWidth = centerRef.current.getBoundingClientRect().width;

    sliderRef.current.style.scrollBehavior = 'smooth';
    sliderRef.current.scrollLeft += sliderWidth;
    sliderRef.current.style.scrollBehavior = 'auto';
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.center} ref={centerRef}>
        <h3>Recommended</h3>

        <button className={styles.leftBtn} onClick={slideLeft}>
          <AiOutlineLeft />
        </button>

        <button className={styles.rightBtn} onClick={slideRight}>
          <AiOutlineRight />
        </button>

        <div className={styles.slider} ref={sliderRef} {...events}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Slider;
