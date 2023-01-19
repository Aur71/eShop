import styles from '../../styles/cart/Products.module.scss';

// COMPONENTS
import Product from './Product';

const Products = () => {
  return (
    <div className={styles.products}>
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default Products;
