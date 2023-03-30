import styles from '../index.module.scss';
import { FormattedMessage } from 'react-intl';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h1>
          <FormattedMessage id="stake_h1" />
        </h1>
      </div>
      <div className={styles.description}>
        <p>
          <FormattedMessage id="stake_p1" />
        </p>
      </div>
    </div>
  );
};

export default Header;
