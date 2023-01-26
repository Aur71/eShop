import styles from '../../../styles/account/returns/Returns.module.scss';
// HOOKS
import { useState } from 'react';

// COMPONENTS
import MyReturns from './MyReturns';
import ReturnDetails from './ReturnDetails';

const Returns = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [returnDetails, setReturnDetails] = useState({});

  const getReturn = () => {
    // GET THE RETURN THAN DISPLAY IT
    setReturnDetails('');
    setShowDetails(true);
  };

  return (
    <section>
      {showDetails ? (
        <ReturnDetails
          returnDetails={returnDetails}
          setShowDetails={setShowDetails}
        />
      ) : (
        <MyReturns getReturn={getReturn} />
      )}
    </section>
  );
};

export default Returns;
