import styles from './Header.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStateAction, setStateToken } from '../../../../store/table/table';
import { FormattedMessage } from 'react-intl';

const Header = () => {
  const [actionButton, setActionButton] = useState(true);
  const dispatch = useDispatch();

  const handleBuy = () => {
    setActionButton(true);
    dispatch(setStateAction('Buy'));
  };

  const handleSell = () => {
    setActionButton(false);
    dispatch(setStateAction('Sell'));
  };

  const stylesBuy = {
    backgroundColor: '#489D51',
    borderRadius: '5px 0px 0px 5px',
  };

  const stylesSell = {
    backgroundColor: '#B53838',
    borderRadius: '0px 5px 5px 0px',
  };

  const place = <FormattedMessage id="p2p_buy" />;

  return (
    <div className={styles.wrapper}>
      <div className={styles.changeAction}>
        <button onClick={handleBuy} style={actionButton ? stylesBuy : {}} className={styles.buy}>
          <FormattedMessage id="p2p_buy" />
        </button>
        <button onClick={handleSell} style={actionButton ? {} : stylesSell} className={styles.sell}>
          <FormattedMessage id="p2p_sell" />
        </button>
      </div>

      <div className={styles.changeToken}>
        <select
          onChange={(e) => {
            dispatch(setStateToken(e.target.value));
          }}
          className={styles.token}>
          <option>USDT</option>
          <option>BTC</option>
          <option>USDT</option>
          <option>ETH</option>
          <option>BUSD</option>
        </select>

        <form>
          <input placeholder="Amount" />
          <select>
            <option>USD</option>
            <option>RUB</option>
            <option>PSD</option>
          </select>
        </form>
      </div>

      <div className={styles.payment}>
        <select>
          <option value="" selected disabled hidden>
            <FormattedMessage id="p2p_payment" />
          </option>
          <option>Bank transfer</option>
          <option>Sberbank</option>
          <option>Tinkoff</option>
          <option>QIWI</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
