import styles from '../styles/favorite/Favorite.module.scss';
// HOOKS
import { useState } from 'react';

// COMPONENTS
import Item from '../components/favorite/Item';

// TOOLS
import Link from 'next/link';

const favorite = () => {
  const [favoriteList, setFavoriteList] = useState(['ceva']);

  // if user is no logedin redirect to login page

  if (favoriteList.length === 0) {
    return (
      <div className={styles.emptyList}>
        <h1>No products added to favorites</h1>

        <Link href='/'>Return to the store</Link>
      </div>
    );
  }

  return (
    <div className={styles.favorite}>
      <div className={styles.center}>
        <div className={styles.container}>
          <h1>Favorite (2 products)</h1>

          <div className={styles.itemsContainer}>
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default favorite;
