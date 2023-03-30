import styles from '../index.module.scss';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import { FormattedMessage } from 'react-intl';

Chart.register(ArcElement);

const data = {
  labels: ['Deposit', 'Withdraw', 'Referral'],
  datasets: [
    {
      data: [33, 33, 33],
      backgroundColor: ['#94A6FF', '#FE7EB4', '#FEF17E'],
      hoverBackgroundColor: ['#94A6FF', '#FE7EB4', '#FEF17E'],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const Comission = () => {
  return (
    <div className={styles.comission}>
      <div className={styles.title}>
        <h1>
          <FormattedMessage id="home_welcome_comission_h1" />
        </h1>
      </div>

      <div className={styles.section}>
        <div className={styles.left}>
          <h1>
            <FormattedMessage id="home_welcome_comission_h2" />
          </h1>
          <p>
            <FormattedMessage id="home_welcome_comission_h4" />
          </p>
          <p>
            <FormattedMessage id="home_welcome_comission_h6" />
          </p>
          <h3>
            <FormattedMessage id="home_welcome_comission_h8" />
          </h3>
          <p>
            1: 1% $0 - $5 000<br></br> 2: 0.95% $5 001 - $15 000<br></br> 3: 0.8% $15 001 - $30 000
            <br></br> 4: 0.7% $30 001 - $100 000<br></br> 5: 0.5% $100 001 - $150 000
          </p>
        </div>

        <div className={styles.right}>
          <h1>
            <FormattedMessage id="home_welcome_comission_h3" />
          </h1>
          <p>
            <FormattedMessage id="home_welcome_comission_h5" />
          </p>
          <h3>
            <FormattedMessage id="home_welcome_comission_h7" />
          </h3>
          <p>Bitcoin: 0.00039 BTC</p>
          <p>Ethereum: 0.002 ETH</p>
          <p>Toncoin: 0.2 TON</p>
          <p>Tether: 3 USDT</p>
          <p>Monero: 0.01 XMR</p>
          <p>
            <FormattedMessage id="home_welcome_comission_h9" />
          </p>
          <p>
            <FormattedMessage id="home_welcome_comission_h10" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comission;
