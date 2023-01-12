import styles from '../../styles/product/Slider.module.scss';
// HOOKS
import { useState } from 'react';

// TOOLS
import Image from 'next/image';

// MEDIA
import img1 from '../../public/temporary/temp.jpg';
import img2 from '../../public/temporary/temp2.jpg';
import img3 from '../../public/temporary/temp3.jpg';

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

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
  ];

  return (
    <div className={styles.slider}>
      <div className={styles.imgContainer}>
        <p>Top Favorite</p>
        <Image src={tempData[activeImage].img} alt='some img' priority={true} />
      </div>

      <div className={styles.btnsContainer}>
        {tempData.map((item, index) => {
          return (
            <button
              key={item.id}
              className={`${activeImage === index && styles.active}`}
              onMouseOver={() => setActiveImage(index)}
            >
              <Image src={item.img} alt='img' priority={true} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
