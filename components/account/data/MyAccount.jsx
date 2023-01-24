import styles from '../../../styles/account/data/MyAccount.module.scss';
// HOOKS
import { useAccountContext } from '../../../context/accountContext';

// TOOLS
import Image from 'next/image';

// MEDIA
import user from '../../../public/user.png';

const MyAccount = () => {
  const { openDataForm } = useAccountContext();

  return (
    <div className={styles.myAccount}>
      <div className={styles.accountData}>
        <h2>Account Data</h2>

        <div className={styles.data}>
          <div className={styles.imgContainer}>
            <input type='file' accept='image/png, image/jpeg' />

            <Image src={user} alt='default user image' />
          </div>

          <div className={styles.dataContainer}>
            <ul>
              <li>
                <span>Name:</span>
                <span>Aurel</span>
              </li>

              <li>
                <span>Email:</span>
                <span>aurel@gmail.com</span>
              </li>

              <li>
                <span>Phone:</span>
                <span>0771088481</span>
              </li>
            </ul>
          </div>

          <h3>
            Thank you for being <br /> our customer <br /> 2 days
          </h3>
        </div>

        <button className={styles.changeData} onClick={openDataForm}>
          change
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
