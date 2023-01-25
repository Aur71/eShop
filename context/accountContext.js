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
  const [rating, setRating] = useState('Add a review');

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

    if (stars === 0 || stars === '') {
      setRating('Rate the product');
    }

    if (stars === 1) {
      setRating('Very bad');
    }
    if (stars === 2) {
      setRating('Bad');
    }
    if (stars === 3) {
      setRating('Decent');
    }
    if (stars === 4) {
      setRating('Good');
    }
    if (stars === 5) {
      setRating('Excellent');
    }
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
        setRating,
        rating,
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
