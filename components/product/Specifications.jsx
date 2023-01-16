import styles from '../../styles/product/Specifications.module.scss';
// HOOKS
import { useState, useRef, useEffect } from 'react';

const Specifications = () => {
  const [showMore, setShowMore] = useState(false);
  const specsRef = useRef(null);
  const centerRef = useRef(null);
  const showBtnRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const height = centerRef.current.getBoundingClientRect().height;

    if (height < 500) {
      specsRef.current.style.height = `${height}px`;
      centerRef.current.style.paddingBottom = `${2}rem`;
      showBtnRef.current.style.display = 'none';
      overlayRef.current.style.display = 'none';
    }

    // NEED TO ADD A DEPENDENCY WHEN THE DESCRIPTION CHANGES
  }, [specsRef, centerRef]);

  const handleSpecs = () => {
    setShowMore(!showMore);

    setShowMore(!showMore);
    const height = centerRef.current.getBoundingClientRect().height;

    if (!showMore) {
      specsRef.current.style.height = `${height}px`;
    } else {
      specsRef.current.style.height = `${500}px`;
    }
  };

  return (
    <div className={styles.specs} ref={specsRef}>
      <div
        className={`${styles.overlay}  ${showMore && styles.inactive}`}
        ref={overlayRef}
      ></div>

      <button className={styles.showBtn} onClick={handleSpecs} ref={showBtnRef}>
        {showMore ? 'show less' : 'show more'}
      </button>

      <div className={styles.center} ref={centerRef}>
        <h2>Specifications</h2>

        <div className={styles.tableContainer}>
          <h3>Table Title</h3>

          <div className={styles.table}>
            <div className={styles.tableRow}>
              <p>Key</p>
              <p>Value</p>
            </div>

            <div className={styles.tableRow}>
              <p>Key</p>
              <p>Value</p>
            </div>

            <div className={styles.tableRow}>
              <p>Key</p>
              <p>Value</p>
            </div>

            <div className={styles.tableRow}>
              <p>Key</p>
              <p>Value</p>
            </div>
          </div>
        </div>

        <div className={styles.tableContainer}>
          <h3>Table Title</h3>

          <div className={styles.table}>
            <div className={styles.tableRow}>
              <p>Key</p>
              <p>Value</p>
            </div>

            <div className={styles.tableRow}>
              <p>Key</p>
              <p>Value</p>
            </div>

            <div className={styles.tableRow}>
              <p>Key</p>
              <p>Value</p>
            </div>

            <div className={styles.tableRow}>
              <p>Key</p>
              <p>Value</p>
            </div>
          </div>
        </div>

        <div className={styles.tableContainer}>
          <h3>Table Title</h3>

          <div className={styles.table}>
            <div className={styles.tableRow}>
              <p>Key</p>
              <p>Value</p>
            </div>

            <div className={styles.tableRow}>
              <p>Key</p>
              <p>Value</p>
            </div>

            <div className={styles.tableRow}>
              <p>Key</p>
              <p>Value</p>
            </div>

            <div className={styles.tableRow}>
              <p>Key</p>
              <p>Value</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
