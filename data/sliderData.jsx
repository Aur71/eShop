// TOOLS
import Image from 'next/image';

// MEDIA
import img1 from '../public/slider/slider-1.jpg';
import img2 from '../public/slider/slider-2.jpg';
import img3 from '../public/slider/slider-3.jpg';

export const sliderData = [
  {
    id: 1,
    img: <Image src={img1} alt='img' />,
    path: '',
  },

  {
    id: 2,
    img: <Image src={img2} alt='img' />,
    path: '',
  },

  {
    id: 3,
    img: <Image src={img3} alt='img' />,
    path: '',
  },
];
