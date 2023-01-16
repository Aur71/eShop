import styles from '../../styles/product/Product.module.scss';

// COMPONENTS
import Title from '../../components/product/Title';
import Showcase from '../../components/product/showcase/Showcase';
import Navigation from '../../components/product/Navigation';
import Description from '../../components/product/Description';
import Specifications from '../../components/product/Specifications';

const Product = () => {
  return (
    <div className={styles.product}>
      <Title />
      <Showcase />
      <Navigation />

      <Description />
      <Specifications />
    </div>
  );
};

export default Product;
