import React from 'react';
// HOOKS
import { useGlobalContext } from './context';
import { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const { setShowOverlay } = useGlobalContext();
  const [showDataForm, setShowDataForm] = useState(false);

  //   OPENING DATA FORM
  const openDataForm = () => {
    setShowOverlay(true);
    setShowDataForm(true);
  };

  //   CLOSING DATA FORM
  const closeDataForm = () => {
    setShowOverlay(false);
    setShowDataForm(false);
  };

  return (
    <AppContext.Provider
      value={{
        openDataForm,
        closeDataForm,
        showDataForm,
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
