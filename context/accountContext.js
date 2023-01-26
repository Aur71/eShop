import React from 'react';
// HOOKS
import { useGlobalContext } from './context';
import { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const { setShowOverlay } = useGlobalContext();
  const [showDataForm, setShowDataForm] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [starCount, setStarCount] = useState(0);

  //   OPENING DATA FORM
  const openDataForm = () => {
    setShowOverlay(true);
    setShowDataForm(true);
    document.querySelector('body').style.overflowY = 'hidden';
  };

  //   CLOSING DATA FORM
  const closeDataForm = () => {
    setShowOverlay(false);
    setShowDataForm(false);
    document.querySelector('body').style.overflowY = 'auto';
  };

  const closeReviewForm = () => {
    setShowOverlay(false);
    setShowReviewForm(false);
    document.querySelector('body').style.overflowY = 'auto';
  };

  const handleReview = (stars) => {
    setShowOverlay(true);
    setShowReviewForm(true);
    document.querySelector('body').style.overflowY = 'hidden';
    setStarCount(stars);
  };

  return (
    <AppContext.Provider
      value={{
        openDataForm,
        closeDataForm,
        showDataForm,
        closeReviewForm,
        showReviewForm,
        handleReview,
        starCount,
        setStarCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAccountContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
