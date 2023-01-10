import React from 'react';
// HOOKS
import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(null);
  const route = useRouter();
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  //   SETTING THE SCREEN WIDTH
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const handleMenu = () => {
    if (route.pathname === '/' && window.innerWidth > 1100) {
      setShowMenu(true);
    } else if (window.innerWidth > 800) {
      setShowMenu(!showMenu);
    } else {
      return;
    }
  };

  //   SETTING THE MENU BASED ON PATH AND WINDOW SIZE
  useEffect(() => {
    if (screenWidth === null) {
      if (window.innerWidth > 1100 && route.pathname === '/') {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    } else if (screenWidth > 1100 && route.pathname === '/') {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }, [route.pathname, screenWidth]);

  return (
    <AppContext.Provider
      value={{
        showMenu,
        setShowMenu,
        handleMenu,
        showMegaMenu,
        setShowMegaMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
