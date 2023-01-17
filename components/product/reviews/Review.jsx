import styles from '../../../styles/product/reviews/Review.module.scss';

// TOOLS
import Link from 'next/link';
import Image from 'next/image';

// MEDIA
import user from '../../../public/user.webp';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { AiFillLike } from 'react-icons/ai';
import { BiCommentAdd, BiCommentDetail } from 'react-icons/bi';

const Review = () => {
  return (
    <div className={styles.review}>
      <div className={styles.userInfo}>
        <Image src={user} alt='user img' />
        <p>
          <span>Some name</span>
          <span>15 Dec 2022</span>
        </p>
      </div>

      <div className={styles.userReview}>
        <div className={styles.rating}>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />

          <IoCheckmarkCircleSharp className={styles.gmagBuyer} />
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error et nam
          provident amet alias minima, eveniet quos ullam earum iste commodi
          voluptatem! Culpa, pariatur. Officia accusantium quo maiores sequi
          sint. lorem50
        </p>

        <div className={styles.btnsContainer}>
          <button>
            <AiFillLike />
            <span>1</span>
          </button>

          <button>
            <BiCommentAdd />
            <span>Add comment</span>
          </button>

          <button>
            <BiCommentDetail />
            <span>See comments</span>
            <span>(1)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
