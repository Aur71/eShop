import styles from '../../../styles/account/returns/Returns.module.scss';

// COMPONENTS
import MyReturns from './MyReturns';
import ReturnDetails from './ReturnDetails';

const Returns = () => {
  return (
    <section>
      <MyReturns />
      <ReturnDetails />
    </section>
  );
};

export default Returns;
