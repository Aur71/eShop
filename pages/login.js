import styles from '../styles/account/Login.module.scss';

// TOOLS
import Image from 'next/image';
import Link from 'next/link';

// MEDIA
import { BsGoogle } from 'react-icons/bs';
import logo from '../public/logo.png';

const login = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.login}>
        <div className={styles.logoContainer}>
          <Link href='/'>
            <Image src={logo} alt='GMAG logo' />
          </Link>
        </div>

        <form>
          <h1>Login</h1>

          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='user@gmail.com'
          />

          <label htmlFor='email'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='abcDEF123!'
          />

          <button type='submit' className={styles.submitBtn}>
            Next
          </button>

          <div className={styles.line}>
            <span></span>
            <span>or</span>
            <span></span>
          </div>

          <button className={styles.googleBtn}>
            <span>
              <BsGoogle />
            </span>

            <span>Google</span>
          </button>
        </form>

        <Link href='/register' className={styles.registerLink}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default login;
