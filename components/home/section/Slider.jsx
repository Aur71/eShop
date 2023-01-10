import styles from '../../../styles/home/section/Slider.module.scss';
// HOOKS
import { useRef } from 'react';

// COMPONENTS
import Card from './Card';

// MEDIA
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Slider = () => {
  const sliderRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const slideLeft = () => {
    const sliderWidth = sliderRef.current.getBoundingClientRect().width;
    const cardsContainerWidth =
      cardsContainerRef.current.getBoundingClientRect().width;

    cardsContainerRef.current.scrollLeft -= sliderWidth;
  };

  const slideRight = () => {
    const sliderWidth = sliderRef.current.getBoundingClientRect().width;
    const cardsContainerWidth =
      cardsContainerRef.current.getBoundingClientRect().width;

    cardsContainerRef.current.scrollLeft += sliderWidth;
  };

  return (
    <div className={styles.slider} ref={sliderRef}>
      <button className={styles.leftBtn} onClick={slideLeft}>
        <AiOutlineLeft />
      </button>

      <button className={styles.rightBtn} onClick={slideRight}>
        <AiOutlineRight />
      </button>

      <div className={styles.cardsContainer} ref={cardsContainerRef}>
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
