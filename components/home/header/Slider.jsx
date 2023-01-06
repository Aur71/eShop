import styles from '../../../styles/home/header/Slider.module.scss';

// TOOLS
import Link from 'next/link';
import Image from 'next/image';

// MEDIA
import img from '../../../public/temporary/slider.jpg';

const Slider = () => {
  return (
    <div className={styles.slider}>
      <Link href='#'>
        <Image src={img} alt='slider image' priority={true} />
      </Link>
    </div>
  );
};

export default Slider;
