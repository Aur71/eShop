import styles from '../../styles/product/Product.module.scss';

// COMPONENTS
import Title from '../../components/product/Title';
import Showcase from '../../components/product/Showcase';

const Product = () => {
  return (
    <div className={styles.product}>
      <section>
        <div className={styles.center}>
          <Title />
          <Showcase />
        </div>
      </section>
    </div>
  );
};

export default Product;
