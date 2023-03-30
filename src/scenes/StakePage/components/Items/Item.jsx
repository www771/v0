import styles from './Item.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faQuestion } from '@fortawesome/free-solid-svg-icons';

const Item = ({ img, token }) => {
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={img} />
        </div>
        <div className={styles.title}>
          <h3>{token} Farming</h3>
          <p>
            Stake {token} - Earn {token}
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.header}>
          <div className={styles.left}>
            <p>APR</p>
            <FontAwesomeIcon size="xs" icon={faCalculator} />
            <FontAwesomeIcon size="xs" icon={faQuestion} />
          </div>

          <div>
            <p>912,5%</p>
          </div>
        </div>

        <div className={styles.top}>
          <div className={styles.text}>
            <span>Staked {token}</span>
            <p>0 {token}</p>
          </div>

          <div className={styles.actions}>
            <button style={{ backgroundColor: '#57AE5B' }}>+</button>
            <button style={{ backgroundColor: '#4A4F79' }}>-</button>
          </div>
        </div>

        <div className={styles.medium}>
          <div className={styles.text}>
            <span>Earn {token}</span>
            <p>0 {token}</p>
          </div>

          <div className={styles.actions}>
            <button style={{ backgroundColor: '#57AE5B' }}>Withdraw</button>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>3% deposit fee</p>
          <p>3% withdraw fee</p>
        </div>

        <div className={styles.contract}>
          <a href="/">View contract</a>
        </div>
      </div>
    </div>
  );
};

export default Item;
