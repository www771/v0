import Header from './components/Header';
import Stake from './components/Stake';
import styles from './index.module.scss';
import users from '../../assets/confetti.png';
import { motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

const StakePage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="page">
      <Header />
      <Stake />
      <div className={styles.referal}>
        <div className={styles.title}>
          <h1>
            <FormattedMessage id="stake_h2" />
          </h1>
        </div>

        <div className={styles.fff}>
          <div className={styles.info}>
            <div className={styles.card}>
              <p>
                <FormattedMessage id="stake_p2" />
              </p>
            </div>

            <div className={styles.card}>
              <p>
                <FormattedMessage id="stake_p3" />
              </p>
            </div>

            <div className={styles.card}>
              <p>
                <FormattedMessage id="stake_p4" />
              </p>
            </div>
          </div>

          <div className={styles.code}>
            <div className={styles.header}>
              <img src={users} />
            </div>

            <div className={styles.title}>
              <h1>
                <FormattedMessage id="stake_h3" />
              </h1>
            </div>

            <div className={styles.detail}>
              <p>
                <FormattedMessage id="stake_h4" />
              </p>
            </div>

            <div className={styles.fields}>
              <input type="text" value="cthulhu.farm/stake/?ref=fx" READONLY />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StakePage;
