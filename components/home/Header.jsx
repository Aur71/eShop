import styles from '../../styles/home/Header.module.scss';
// HOOKS
import { useState, useEffect } from 'react';

// TOOLS
import Link from 'next/link';
import Image from 'next/image';

// MEDIA
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

// DATA
import { sliderData } from '../../data/sliderData';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const checkNum = (num) => {
    if (num < 0) {
      return sliderData.length - 1;
    }

    if (num === sliderData.length) {
      return 0;
    }

    return num;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveIndex(checkNum(activeIndex + 1));
    }, 10000);

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <section className={styles.header}>
      <div className={styles.center}>
        <div className={styles.slider}>
          <button
            className={styles.arrowLeft}
            onClick={() => setActiveIndex(checkNum(activeIndex - 1))}
          >
            <AiOutlineLeft />
          </button>

          <button
            className={styles.arrowRight}
            onClick={() => setActiveIndex(checkNum(activeIndex + 1))}
          >
            <AiOutlineRight />
          </button>

          <div className={styles.pagination}>
            {sliderData.map((item, index) => {
              if (activeIndex === index) {
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={styles.active}
                  ></button>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                ></button>
              );
            })}
          </div>

          {sliderData.map((item, index) => {
            if (index === activeIndex) {
              return (
                <Link href={item.path} key={item.id} className={styles.active}>
                  {item.img}
                </Link>
              );
            }

            if (index === activeIndex + 1) {
              return (
                <Link href={item.path} key={item.id} className={styles.next}>
                  {item.img}
                </Link>
              );
            }

            if (index === activeIndex - 1 || index === sliderData.length - 1) {
              return (
                <Link href={item.path} key={item.id} className={styles.last}>
                  {item.img}
                </Link>
              );
            }

            return (
              <Link href={item.path} key={item.id} className={styles.next}>
                {item.img}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Header;
