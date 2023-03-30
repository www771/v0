import usdt from '../../../assets/staking/usdt.png';
import eth from '../../../assets/staking/eth.png';
import bnb from '../../../assets/staking/bnb.png';
import busd from '../../../assets/staking/busd.png';
import Item from './Items/Item';
import styles from '../index.module.scss';

const Stake = () => {
  return (
    <div className={styles.lists}>
      <div className={styles.top}>
        <Item img={usdt} token="USDT" />
        <Item img={eth} token="ETH" />
        <Item img={bnb} token="BNB" />
        <Item img={busd} token="BUSD" />
      </div>
    </div>
  );
};

export default Stake;
