import styles from '../../styles/account/Account.module.scss';
// HOOKS
import { useState } from 'react';

import { AppProvider } from '../../context/accountContext';

// COMPONENTS
import Sidebar from '../../components/account/Sidebar';

import MyAccount from '../../components/account/data/MyAccount';
import DataForm from '../../components/account/data/DataForm';

import Orders from '../../components/account/orders/Orders';

import Returns from '../../components/account/returns/Returns';
import ReturnForm from '../../components/account/returns/ReturnForm';

import Guarantess from '../../components/account/guarantess/Guarantess';

import Reviews from '../../components/account/reviews/Reviews';

import Security from '../../components/account/security/Security';

const windows = [
  {
    id: 1,
    name: 'account',
    component: <MyAccount />,
  },

  {
    id: 2,
    name: 'orders',
    component: <Orders />,
  },

  {
    id: 3,
    name: 'returns',
    component: <Returns />,
  },

  {
    id: 4,
    name: 'guarantees',
    component: <Guarantess />,
  },

  {
    id: 5,
    name: 'reviews',
    component: <Reviews />,
  },

  {
    id: 6,
    name: 'security',
    component: <Security />,
  },
];

const account = () => {
  const [activeWindow, setActiveWindow] = useState('account');

  return (
    <AppProvider>
      <div className={styles.account}>
        <Sidebar
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        />
        <DataForm />

        {windows.map((window) => {
          if (activeWindow === window.name) {
            return (
              <div className={styles.wrapper} key={window.id}>
                {window.component}
              </div>
            );
          }
        })}
      </div>
    </AppProvider>
  );
};

export default account;
