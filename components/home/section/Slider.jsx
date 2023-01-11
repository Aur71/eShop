import styles from '../../../styles/home/section/Slider.module.scss';
// HOOKS
import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

// COMPONENTS
import Card from './Card';

// MEDIA
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Slider = () => {
  const sliderRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const { events } = useDraggable(cardsContainerRef);

  // SLIDE LEFT EVENT
  const slideLeft = () => {
    const sliderWidth = sliderRef.current.getBoundingClientRect().width;
    // const cardsContainerWidth =
    //   cardsContainerRef.current.getBoundingClientRect().width;

    cardsContainerRef.current.style.scrollBehavior = 'smooth';
    cardsContainerRef.current.scrollLeft -= sliderWidth;
    cardsContainerRef.current.style.scrollBehavior = 'auto';
  };

  // SLIDE RIGHT EVENT
  const slideRight = () => {
    const sliderWidth = sliderRef.current.getBoundingClientRect().width;
    // const cardsContainerWidth =
    //   cardsContainerRef.current.getBoundingClientRect().width;

    cardsContainerRef.current.style.scrollBehavior = 'smooth';
    cardsContainerRef.current.scrollLeft += sliderWidth;
    cardsContainerRef.current.style.scrollBehavior = 'auto';
  };

  return (
    <div className={styles.slider} ref={sliderRef}>
      <button className={styles.leftBtn} onClick={slideLeft}>
        <AiOutlineLeft />
      </button>

      <button className={styles.rightBtn} onClick={slideRight}>
        <AiOutlineRight />
      </button>

      <div
        className={styles.cardsContainer}
        {...events}
        ref={cardsContainerRef}
      >
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
  );
};

export default Slider;
