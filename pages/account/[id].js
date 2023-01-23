import styles from '../../styles/account/Account.module.scss';
// HOOKS
import { useState } from 'react';

// COMPONENTS
import Sidebar from '../../components/account/Sidebar';
import MyAccount from '../../components/account/MyAccount';
import MyOrders from '../../components/account/MyOrders';
import MyReturns from '../../components/account/MyReturns';
import MyGuarantees from '../../components/account/MyGuarantees';
import MyReviews from '../../components/account/MyReviews';
import Security from '../../components/account/Security';

const windows = [
  {
    id: 1,
    name: 'account',
    component: <MyAccount />,
  },

  {
    id: 2,
    name: 'orders',
    component: <MyOrders />,
  },

  {
    id: 3,
    name: 'returns',
    component: <MyReturns />,
  },

  {
    id: 4,
    name: 'guarantees',
    component: <MyGuarantees />,
  },

  {
    id: 5,
    name: 'reviews',
    component: <MyReviews />,
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
    <div className={styles.account}>
      <Sidebar activeWindow={activeWindow} setActiveWindow={setActiveWindow} />

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
  );
};

export default account;
