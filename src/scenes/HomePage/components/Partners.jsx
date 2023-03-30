import styles from '../index.module.scss';
import Marquee from 'react-fast-marquee';
import metamask from '../../../assets/metamask.svg';
import bnb from '../../../assets/bnb.svg';
import coin from '../../../assets/coin.png';
import trust from '../../../assets/trust.svg';
import safe from '../../../assets/safe.png';
import { FormattedMessage } from 'react-intl';

const Partners = () => {
  return (
    <div className={styles.partners_section}>
      <div className={styles.title}>
        <h1>
          <FormattedMessage id="home_welcome_partners_h1" />
        </h1>
      </div>

      <div className={styles.link}>
        <Marquee speed={60} gradient={false} style={{ height: '80px' }}>
          <a href="/">
            <img src={metamask} />
            <h2>MetaMask</h2>
          </a>

          <a href="/">
            <img src={bnb} />
            <h2>
              BNB <span>Chain</span>
            </h2>
          </a>

          <a href="/">
            <img src={coin} />
          </a>

          <a href="/">
            <img src={trust} />
            <h2>Trust Wallet</h2>
          </a>

          <a href="/">
            <img style={{ fill: '#fff' }} src={safe} />
            <h2>SafePal </h2>
          </a>
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
