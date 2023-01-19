import styles from '../../styles/product/Product.module.scss';

// COMPONENTS
import Slider from '../../components/product/slider/Slider';
import Title from '../../components/product/Title';
import Showcase from '../../components/product/showcase/Showcase';
import Navigation from '../../components/product/Navigation';
import Description from '../../components/product/Description';
import Specifications from '../../components/product/Specifications';
import Reviews from '../../components/product/reviews/Reviews';
import Section from '../../components/home/section/Section';

const Product = () => {
  return (
    <div className={styles.product}>
      <Title />
      <Showcase />
      <Navigation />

      <Description />

      <Slider />

      <Specifications />

      <Slider />

      <Reviews />

      <Slider />
    </div>
  );
};

export default Product;
