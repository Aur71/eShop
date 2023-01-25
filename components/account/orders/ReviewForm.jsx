import styles from '../../../styles/account/orders/ReviewForm.module.scss';
// HOOKS
import { useAccountContext } from '../../../context/accountContext';
import { useState } from 'react';

// TOOLS
import Image from 'next/image';
import Link from 'next/link';

// MEDIA
import { AiOutlineClose, AiOutlineCloudUpload } from 'react-icons/ai';
import { BsStarFill } from 'react-icons/bs';
import img from '../../../public/temporary/temp.jpg';

const ReviewForm = () => {
  const {
    showReviewForm,
    closeReviewForm,
    starCount,
    setStarCount,
    rating,
    setRating,
  } = useAccountContext();

  const handleRating = (s, r) => {
    setStarCount(s);
    setRating(r);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <button
              onClick={() => handleRating(1, 'Very bad')}
              className={`${starCount >= 1 && styles.active}`}
            >
              <BsStarFill />
            </button>

            <button
              onClick={() => handleRating(2, 'Bad')}
              className={`${starCount >= 2 && styles.active}`}
            >
              <BsStarFill />
            </button>

            <button
              onClick={() => handleRating(3, 'Decent')}
              className={`${starCount >= 3 && styles.active}`}
            >
              <BsStarFill />
            </button>

            <button
              onClick={() => handleRating(4, 'Good')}
              className={`${starCount >= 4 && styles.active}`}
            >
              <BsStarFill />
            </button>

            <button
              onClick={() => handleRating(5, 'Excellent')}
              className={`${starCount >= 5 && styles.active}`}
            >
              <BsStarFill />
            </button>

            <p>{rating}</p>
          </div>

          <form onSubmit={handleSubmit}>
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
