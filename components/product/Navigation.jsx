import styles from '../../styles/product/Navigation.module.scss';
// HOOKS
import { useState, useEffect, useCallback } from 'react';

const Navigation = () => {
  const [activeBtn, setActiveBtn] = useState('');

  const scroll2El = (goto) => {
    window.scrollTo({
      top: goto.offsetTop - 60,
      behavior: 'smooth',
    });
  };

  const scrollDesc = (e, id) => {
    e.preventDefault();
    const goto = document.getElementById(id);

    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  };

  const onScroll = useCallback(() => {
    const descOffSet = document.getElementById('desc').offsetTop - 60;
    const specsOffSet = document.getElementById('specs').offsetTop - 60;
    const reviewsOffSet = document.getElementById('reviews').offsetTop - 60;

    const { pageYOffset } = window;

    if (descOffSet <= pageYOffset && pageYOffset < specsOffSet) {
      setActiveBtn('desc');

      return;
    }

    if (specsOffSet <= pageYOffset && pageYOffset < reviewsOffSet) {
      setActiveBtn('specs');

      return;
    }

    if (reviewsOffSet <= pageYOffset) {
      setActiveBtn('reviews');

      return;
    }
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener('scroll', onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true });
    };
  }, []);

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <button
            className={`${activeBtn === 'desc' && styles.active}`}
            onClick={(e) => scrollDesc(e, 'desc')}
          >
            Description
          </button>
        </li>

        <li>
          <button
            className={`${activeBtn === 'specs' && styles.active}`}
            onClick={(e) => scrollDesc(e, 'specs')}
          >
            Specifications
          </button>
        </li>

        <li>
          <button
            className={`${activeBtn === 'reviews' && styles.active}`}
            onClick={(e) => scrollDesc(e, 'reviews')}
          >
            Reviews
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
