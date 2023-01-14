import styles from '../../styles/product/Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <button className={styles.active}>Description</button>
        </li>

        <li>
          <button>Specifications</button>
        </li>

        <li>
          <button>Reviews</button>
        </li>

        <li>
          <button>Questions</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
