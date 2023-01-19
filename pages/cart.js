import styles from '../styles/cart/Cart.module.scss';

// TOOLS
import Link from 'next/link';

// COMPONENTS
import Products from '../components/cart/Products';
import CheckOut from '../components/cart/CheckOut';

const Cart = () => {
  const cart = ['no empty'];

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h1>Your basket is empty :(</h1>

        <Link href='/'>Return to the store</Link>
      </div>
    );
  }

  return (
    <div className={styles.cart}>
      <h1>My Cart</h1>
      <div className={styles.center}>
        <Products />
        <CheckOut />
      </div>
    </div>
  );
};

export default Cart;
