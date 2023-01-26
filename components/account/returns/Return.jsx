import styles from '../../../styles/account/returns/Return.module.scss';

const Return = ({ getReturn }) => {
  return (
    <article className={styles.return}>
      <div className={styles.header}>
        <h3 onClick={() => getReturn('return id')}>Return no. 292427516</h3>

        <button onClick={() => getReturn('return id')}>return details</button>
      </div>

      <div className={styles.returnInfo}>
        <p>Returned on: December 19, 2022, 11:41</p>
        <p>Total: 31.39$</p>
        <p>
          Status: <span>Returned</span>
        </p>
      </div>
    </article>
  );
};

export default Return;
