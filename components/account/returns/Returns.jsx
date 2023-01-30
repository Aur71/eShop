import styles from '../../../styles/account/returns/Returns.module.scss';
// HOOKS
import { useState } from 'react';

// COMPONENTS
import MyReturns from './MyReturns';
import ReturnDetails from './ReturnDetails';
import ReturnForm from './return_form/ReturnForm';

const Returns = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [returnDetails, setReturnDetails] = useState({});
  const [showReturnForm, setShowReturnForm] = useState(false);

  const getReturn = () => {
    // GET THE RETURN THAN DISPLAY IT
    setReturnDetails({});
    setShowDetails(true);
  };

  const closeShowDetails = () => {
    setShowDetails(false);
    setReturnDetails({});
  };

  const openReturnForm = () => {
    setShowReturnForm(true);
  };

  const closeReturnForm = () => {
    setShowReturnForm(false);
  };

  if (showReturnForm) {
    return <ReturnForm closeReturnForm={closeReturnForm} />;
  }

  return (
    <section>
      {showDetails ? (
        <ReturnDetails
          returnDetails={returnDetails}
          closeShowDetails={closeShowDetails}
        />
      ) : (
        <MyReturns getReturn={getReturn} openReturnForm={openReturnForm} />
      )}
    </section>
  );
};

export default Returns;
