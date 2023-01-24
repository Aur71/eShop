import styles from '../../../styles/account/data/DataForm.module.scss';
// HOOKS
import { useAccountContext } from '../../../context/accountContext';
import { useState } from 'react';

// MEDIA
import { AiOutlineClose } from 'react-icons/ai';

const DataForm = () => {
  const { closeDataForm, showDataForm } = useAccountContext();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`${styles.dataForm} ${showDataForm && styles.active}`}>
      <div className={styles.center}>
        <div className={styles.header}>
          <h3>Data management</h3>

          <button onClick={closeDataForm}>
            <AiOutlineClose />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label htmlFor='firstName'>First Name:</label>

            <input
              type='text'
              id='firstName'
              name='firstName'
              placeholder='Alex'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className={styles.row}>
            <label htmlFor='lastName'>Last Name:</label>

            <input
              type='text'
              id='lastName'
              name='lastName'
              placeholder='Popescu'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className={styles.row}>
            <label htmlFor='phoneNumber'>Phone:</label>

            <input
              type='text'
              id='phoneNumber'
              name='phoneNumber'
              placeholder='0753412588'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <button type='submit'>Save</button>
        </form>
      </div>
    </div>
  );
};

export default DataForm;
