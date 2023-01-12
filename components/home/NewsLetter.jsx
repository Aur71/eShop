import styles from '../../styles/home/NewsLetter.module.scss';

// TOOLS
import Image from 'next/image';

// MEDIA
import img from '../../public/home/news-letter.webp';

const NewsLetter = () => {
  return (
    <section className={styles.newsLetter}>
      <div className={styles.center}>
        <div className={styles.imgContainer}>
          <Image src={img} alt='couple using the laptop together' />
        </div>

        <form>
          <h2>
            Subscribe to the GMAG newsletter and find out in advance about
            limited discounts!
          </h2>

          <p>
            By subscribing to the GMAG newsletter, I confirm that I am over 16
            years old.
          </p>

          <div className={styles.inputsContainer}>
            <input type='text' name='name' id='name' placeholder='Name' />
            <input type='email' name='email' id='email' placeholder='Email' />
            <button type='submit'>Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
