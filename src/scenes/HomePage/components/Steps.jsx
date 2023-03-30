import styles from '../index.module.scss';
import { FormattedMessage } from 'react-intl';

const Steps = () => {
  return (
    <div className={styles.steps}>
      <div className={styles.step}>
        <div>
          <h1 style={{ color: '#94A6FF' }}>01</h1>
          <h3>
            <FormattedMessage id="home_welcome_steps1_h1" />
          </h3>
          <p>
            <FormattedMessage id="home_welcome_steps1_p1" />
          </p>
        </div>
      </div>

      <div className={styles.step}>
        <div>
          <h1 style={{ color: '#FE7EB4' }}>02</h1>
          <h3>
            <FormattedMessage id="home_welcome_steps2_h1" />
          </h3>
          <p>
            <FormattedMessage id="home_welcome_steps2_p1" />
          </p>
        </div>
      </div>

      <div className={styles.step}>
        <div>
          <h1 style={{ color: '#FEF17E' }}>03</h1>
          <h3>
            <FormattedMessage id="home_welcome_steps3_h1" />
          </h3>
          <p>
            <FormattedMessage id="home_welcome_steps3_p1" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
