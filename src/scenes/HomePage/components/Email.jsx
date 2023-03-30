import styles from '../index.module.scss';
import { FormattedMessage } from 'react-intl';

const Email = () => {
  return (
    <div className={styles.email}>
      <div className={styles.title}>
        <h1>
          <FormattedMessage id="home_welcome_comission_h11" />
        </h1>
      </div>
      <div className={styles.fields}>
        <input placeholder="Enter your email..." />
        <button>
          {' '}
          <FormattedMessage id="home_welcome_comission_h12" />
        </button>
      </div>
    </div>
  );
};

export default Email;
