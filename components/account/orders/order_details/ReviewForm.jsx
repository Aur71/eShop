import styles from '../../../../styles/account/orders/order_details/ReviewForm.module.scss';
// HOOKS
import { useAccountContext } from '../../../../context/accountContext';
import { useState, useEffect } from 'react';

// TOOLS
import Image from 'next/image';
import Link from 'next/link';

// DATA
import { rating } from '../../../../data/rating';

// MEDIA
import { AiOutlineClose, AiOutlineCloudUpload } from 'react-icons/ai';
import img from '../../../../public/temporary/temp.jpg';

const ReviewForm = () => {
  const [stars, setStars] = useState(0);
  const [tag, setTag] = useState('Rate the product');
  const { showReviewForm, closeReviewForm, starCount } = useAccountContext();

  useEffect(() => {
    setStars(starCount);
    if (starCount === 0) {
      setTag('Rate the product');
    }
    if (starCount === 1) {
      setTag('Very bad');
    }
    if (starCount === 2) {
      setTag('Bad');
    }
    if (starCount === 3) {
      setTag('Decent');
    }
    if (starCount === 4) {
      setTag('Good');
    }
    if (starCount === 5) {
      setTag('Excellent');
    }
  }, [starCount]);

  const handleStars = (num, name) => {
    setStars(num);
    setTag(name);

    if (num === 0) {
      setTag('Rate the product');
    }
  };

  return (
    <div className={`${styles.reviewForm} ${showReviewForm && styles.active}`}>
      <div className={styles.center}>
        <div className={styles.header}>
          <div className={styles.product}>
            <Image src={img} alt='img' />

            <div>
              <p>Add a review for:</p>
              <Link href='#'>Lorem ipsum dolor sit amet.</Link>
            </div>
          </div>

          <button onClick={closeReviewForm}>
            <AiOutlineClose />
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.rating}>
            {rating.map((item) => {
              return (
                <button
                  key={item.id}
                  className={`${item.stars <= stars && styles.active}`}
                  onClick={() => handleStars(item.stars, item.name)}
                >
                  {item.icon}
                </button>
              );
            })}

            <p>{tag}</p>
          </div>

          <form>
            <label htmlFor='title'>Review title:</label>
            <input
              type='text'
              id='title'
              name='title'
              placeholder='An awesome title'
            />

            <label htmlFor='review'>Review:</label>
            <textarea
              name='review'
              id='review'
              placeholder={`Say what you like and what you don't like`}
            ></textarea>

            <div className={styles.imgUpload}>
              <input type='file' accept='image/png, image/jpeg' />

              <AiOutlineCloudUpload className={styles.icon} />
              <p>click here to upload an image</p>
            </div>

            <p>
              By publishing the review, you agree to the site's{' '}
              <Link href='#'>terms and conditions</Link>.
            </p>

            <button type='submit'>Add review</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
