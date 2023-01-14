import styles from '../../styles/product/Description.module.scss';
// HOOKS
import { useState } from 'react';

// TOOLS
import Image from 'next/image';

// MEDIA
import img from '../../public/slider/slider-1.jpg';

const Description = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={`${styles.description} ${showMore && styles.active}`}>
      <div className={`${styles.overlay} ${showMore && styles.inactive}`}></div>

      <h2>Description:</h2>
      <h3>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima eaque
        sequi dignissimos quisquam officia labore, neque ut repellendus
        molestiae ipsa?
      </h3>

      <Image src={img} alt='img' />

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint illum ut
        error! Earum voluptatum voluptatibus fugit laboriosam ea labore
        obcaecati maiores quam? Voluptatum similique deleniti odit sequi
        corporis nostrum dolore?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, maiores!
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit
        possimus dicta, voluptatum totam corrupti.
      </p>

      <ul>
        <h4>List title</h4>
        <li>Some list here</li>
        <li>Some list here</li>
        <li>Some list here</li>
        <li>Some list here</li>
        <li>Some list here</li>
        <li>Some list here</li>
      </ul>

      <a href='#'>Downlad manual</a>

      <button className={styles.showBtn} onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default Description;
