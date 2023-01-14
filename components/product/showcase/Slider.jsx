import styles from '../../../styles/product/showcase/Slider.module.scss';

// HOOKS
import { useState, useRef, useEffect } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

// TOOLS
import Image from 'next/image';

// MEDIA
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import img1 from '../../../public/temporary/temp.jpg';
import img2 from '../../../public/temporary/temp2.jpg';
import img3 from '../../../public/temporary/temp3.jpg';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scroll, setScroll] = useState(false);
  const btnsContainerRef = useRef(null);
  const buttons = useRef(null);
  const { events } = useDraggable(buttons);

  const tempData = [
    {
      id: 1,
      img: img1,
    },

    {
      id: 2,
      img: img2,
    },

    {
      id: 3,
      img: img3,
    },

    {
      id: 4,
      img: img3,
    },

    {
      id: 5,
      img: img3,
    },

    {
      id: 6,
      img: img3,
    },

    {
      id: 7,
      img: img3,
    },

    {
      id: 8,
      img: img3,
    },

    {
      id: 9,
      img: img3,
    },

    {
      id: 10,
      img: img3,
    },

    {
      id: 11,
      img: img3,
    },

    {
      id: 12,
      img: img3,
    },
  ];

  useEffect(() => {
    if (buttons.current.scrollWidth > buttons.current.clientWidth) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }, [tempData]);

  const scrollLeft = () => {
    const width = btnsContainerRef.current.getBoundingClientRect().width;
    buttons.current.style.scrollBehavior = 'smooth';
    buttons.current.scrollLeft -= width;
    buttons.current.style.scrollBehavior = 'auto';
  };

  const scrollRight = () => {
    const width = btnsContainerRef.current.getBoundingClientRect().width;
    buttons.current.style.scrollBehavior = 'smooth';
    buttons.current.scrollLeft += width;
    buttons.current.style.scrollBehavior = 'auto';
  };

  return (
    <div className={styles.slider}>
      <div className={styles.imgContainer}>
        <p>Top Favorite</p>
        {tempData.map((item, index) => {
          if (index > activeIndex) {
            return (
              <Image
                src={item.img}
                alt='some img'
                priority={true}
                className={styles.next}
                key={index}
              />
            );
          }

          if (index < activeIndex) {
            return (
              <Image
                src={item.img}
                alt='some img'
                priority={true}
                className={styles.prev}
                key={index}
              />
            );
          }

          return (
            <Image
              src={item.img}
              alt='some img'
              priority={true}
              className={styles.active}
              key={index}
            />
          );
        })}
      </div>

      <div
        className={`${styles.btnsContainer} ${scroll && styles.active}`}
        ref={btnsContainerRef}
      >
        <button className={styles.scrollLeft} onClick={scrollLeft}>
          <AiOutlineLeft />
        </button>

        <button className={styles.scrollRight} onClick={scrollRight}>
          <AiOutlineRight />
        </button>

        <div className={styles.buttons} ref={buttons} {...events}>
          {tempData.map((item, index) => {
            return (
              <button
                key={item.id}
                className={`${activeIndex === index && styles.active}`}
                onMouseOver={() => setActiveIndex(index)}
              >
                <Image src={item.img} alt='img' priority={true} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
