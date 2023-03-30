import { useSelector } from 'react-redux';
import styles from './Table.module.scss';
import { FormattedMessage } from 'react-intl';

function Table() {
  const { sellOrBuy, token } = useSelector((state) => state.table);

  const stylesSell = {
    backgroundColor: '#B53838',
  };

  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr>
          <th>
            <FormattedMessage id="p2p_maker" />
          </th>
          <th>
            <FormattedMessage id="p2p_price" />
          </th>
          <th>
            <FormattedMessage id="p2p_limit" />
          </th>
          <th>
            <FormattedMessage id="p2p_payment" />
          </th>
          <th>
            <FormattedMessage id="p2p_action" />
          </th>
        </tr>
      </thead>
      <tbody className={styles.main}>
        <tr>
          <td>Bibidooh</td>
          <td>
            29,200.00 <span className={styles.ccc}>USD</span>
          </td>
          <td>
            <p>
              <span>0.49659681 {token}</span>
            </p>
            <p>
              <span>100.00 ~ 10,000.00 USD</span>
            </p>
          </td>
          <td>Tinkoff</td>
          <td>
            <button style={sellOrBuy == 'Sell' ? stylesSell : {}}>
              {sellOrBuy == 'Buy' ? (
                <FormattedMessage id="p2p_b_buy" />
              ) : (
                <FormattedMessage id="p2p_b_sell" />
              )}
            </button>
          </td>
        </tr>
        <tr>
          <td>IMS Indonesia</td>
          <td>
            29,415.00 <span className={styles.ccc}>USD</span>
          </td>
          <td>
            <p>
              <span>110.410 {token}</span>
            </p>
            <p>
              <span>1,500.00 ~ 2,000.00 USD</span>
            </p>
          </td>
          <td>Bank Transfer</td>
          <td>
            <button style={sellOrBuy == 'Sell' ? stylesSell : {}}>
              {sellOrBuy == 'Buy' ? (
                <FormattedMessage id="p2p_b_buy" />
              ) : (
                <FormattedMessage id="p2p_b_sell" />
              )}
            </button>
          </td>
        </tr>
        <tr>
          <td>NatalyaD</td>
          <td>
            29,655.00 <span className={styles.ccc}>USD</span>
          </td>
          <td>
            <p>
              <span>151.4105 {token}</span>
            </p>
            <p>
              <span>1,500.00 ~ 50,000.00 USD</span>
            </p>
          </td>
          <td>Bank Transfer</td>
          <td>
            <button style={sellOrBuy == 'Sell' ? stylesSell : {}}>
              {sellOrBuy == 'Buy' ? (
                <FormattedMessage id="p2p_b_buy" />
              ) : (
                <FormattedMessage id="p2p_b_sell" />
              )}
            </button>
          </td>
        </tr>
        <tr>
          <td>adrianizn</td>
          <td>
            29,745.00 <span className={styles.ccc}>USD</span>
          </td>
          <td>
            <p>
              <span>151.4105 {token}</span>
            </p>
            <p>
              <span>2,500.00 ~ 10,000.00 USD</span>
            </p>
          </td>
          <td>QIWI</td>
          <td>
            <button style={sellOrBuy == 'Sell' ? stylesSell : {}}>
              {sellOrBuy == 'Buy' ? (
                <FormattedMessage id="p2p_b_buy" />
              ) : (
                <FormattedMessage id="p2p_b_sell" />
              )}
            </button>
          </td>
        </tr>
        <tr>
          <td>Jean7</td>
          <td>
            31,355.00 <span className={styles.ccc}>USD</span>
          </td>
          <td>
            <p>
              <span>151.4105 {token}</span>
            </p>
            <p>
              <span>4,000.00 ~ 10,000.00 USD</span>
            </p>
          </td>
          <td>Sberbank</td>
          <td>
            <button style={sellOrBuy == 'Sell' ? stylesSell : {}}>
              {sellOrBuy == 'Buy' ? (
                <FormattedMessage id="p2p_b_buy" />
              ) : (
                <FormattedMessage id="p2p_b_sell" />
              )}
            </button>
          </td>
        </tr>

        <tr>
          <td>Volo</td>
          <td>
            31,355.00 <span className={styles.ccc}>USD</span>
          </td>
          <td>
            <p>
              <span>151.4105 {token}</span>
            </p>
            <p>
              <span>4,000.00 ~ 10,000.00 USD</span>
            </p>
          </td>
          <td>Sberbank</td>
          <td>
            <button style={sellOrBuy == 'Sell' ? stylesSell : {}}>
              {sellOrBuy == 'Buy' ? (
                <FormattedMessage id="p2p_b_buy" />
              ) : (
                <FormattedMessage id="p2p_b_sell" />
              )}
            </button>
          </td>
        </tr>

        <tr>
          <td>Margo</td>
          <td>
            31,355.00 <span className={styles.ccc}>USD</span>
          </td>
          <td>
            <p>
              <span>151.4105 {token}</span>
            </p>
            <p>
              <span>4,000.00 ~ 10,000.00 USD</span>
            </p>
          </td>
          <td>Sberbank</td>
          <td>
            <button style={sellOrBuy == 'Sell' ? stylesSell : {}}>
              {sellOrBuy == 'Buy' ? (
                <FormattedMessage id="p2p_b_buy" />
              ) : (
                <FormattedMessage id="p2p_b_sell" />
              )}
            </button>
          </td>
        </tr>

        <tr>
          <td>Jen4</td>
          <td>
            31,355.00 <span className={styles.ccc}>USD</span>
          </td>
          <td>
            <p>
              <span>151.4105 {token}</span>
            </p>
            <p>
              <span>4,000.00 ~ 10,000.00 USD</span>
            </p>
          </td>
          <td>Sberbank</td>
          <td>
            <button style={sellOrBuy == 'Sell' ? stylesSell : {}}>
              {sellOrBuy == 'Buy' ? (
                <FormattedMessage id="p2p_b_buy" />
              ) : (
                <FormattedMessage id="p2p_b_sell" />
              )}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
