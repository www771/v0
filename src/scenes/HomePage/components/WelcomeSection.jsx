import { Link } from 'react-router-dom';
import styles from '../index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FormattedMessage } from 'react-intl';

const WelcomeSection = () => {
  const [token, setToken] = useState('BTC');
  const [price, setPrice] = useState(0);

  const [convToken, setConvToken] = useState('BTC');
  const [convMon, setConvMon] = useState('USD');
  const [course, setCourse] = useState('1');

  const [countToken, setCountToken] = useState(0);

  if (convToken === 'BTC') {
    axios.get('https://api.coinlore.net/api/ticker/?id=90').then((res) => {
      setCourse(parseFloat(res.data[0].price_usd));
    });
  } else if (convToken === 'ETH') {
    axios.get('https://api.coinlore.net/api/ticker/?id=80').then((res) => {
      setCourse(parseFloat(res.data[0].price_usd));
    });
  } else if (convToken === 'BNB') {
    axios.get('https://api.coinlore.net/api/ticker/?id=2710').then((res) => {
      setCourse(parseFloat(res.data[0].price_usd));
    });
  } else if (convToken === 'USDT') {
    axios.get('https://api.coinlore.net/api/ticker/?id=518').then((res) => {
      setCourse(parseFloat(res.data[0].price_usd));
    });
  }

  if (token === 'BTC') {
    axios.get('https://api.coinlore.net/api/ticker/?id=90').then((res) => {
      setPrice(res.data[0].price_usd);
    });
  } else if (token === 'ETH') {
    axios.get('https://api.coinlore.net/api/ticker/?id=80').then((res) => {
      setPrice(res.data[0].price_usd);
    });
  } else if (token === 'BNB') {
    axios.get('https://api.coinlore.net/api/ticker/?id=2710').then((res) => {
      setPrice(res.data[0].price_usd);
    });
  } else if (token === 'USDT') {
    axios.get('https://api.coinlore.net/api/ticker/?id=518').then((res) => {
      setPrice(res.data[0].price_usd);
    });
  } else if (token === 'BUSD') {
    axios.get('https://api.coinlore.net/api/ticker/?id=48591').then((res) => {
      setPrice(res.data[0].price_usd);
    });
  }

  useEffect(() => {
    axios.get('https://api.coinlore.net/api/ticker/?id=90').then((res) => {
      setPrice(res.data[0].price_usd);
    });
  }, []);

  return (
    <div className={styles.welcome_section}>
      <div className={styles.information}>
        <h1>
          🔥
          <FormattedMessage id="home_welcome_h1" />
        </h1>
        <p>
          <FormattedMessage id="home_welcome_p1" />
        </p>
        <Link to="/p2p">
          <FormattedMessage id="home_welcome_button" />
        </Link>
      </div>
      <div className={styles.change}>
        <div className={styles.title}>
          <h3>
            <FormattedMessage id="home_welcome_change_h1" />
          </h3>
        </div>

        <div>
          <div className={styles.actions}>
            <div>
              <select
                onChange={(e) => {
                  setToken(e.target.value);
                }}>
                <option>BTC</option>
                <option>ETH</option>
                <option>BNB</option>
                <option>USDT</option>
                <option>BUSD</option>
              </select>
            </div>

            <div>
              <select>
                <option value="" selected disabled hidden>
                  <FormattedMessage id="home_welcome_change_action" />
                </option>
                <option>
                  <FormattedMessage id="home_welcome_change_b1" />
                </option>
                <option>
                  <FormattedMessage id="home_welcome_change_b2" />
                </option>
                <option>
                  <FormattedMessage id="home_welcome_change_b3" />
                </option>
                <option>
                  <FormattedMessage id="home_welcome_change_b4" />
                </option>
              </select>
            </div>
          </div>

          <div className={styles.course}>
            <p>
              <FormattedMessage id="home_welcome_change_course" />
              {token}: <span>${price}</span>
            </p>
          </div>

          <div className={styles.swap}>
            <div>
              <p>
                <FormattedMessage id="home_welcome_change_action_c" />
              </p>
              <form>
                <input
                  placeholder="0"
                  value={countToken}
                  onChange={(e) => setCountToken(parseFloat(e.target.value))}
                />
                <select
                  onChange={(e) => {
                    setConvToken(e.target.value);
                  }}>
                  <option>BTC</option>
                  <option>ETH</option>
                  <option>BNB</option>
                  <option>BUSD</option>
                  <option>USDT</option>
                </select>
              </form>
            </div>

            <div>
              <button>
                <FontAwesomeIcon icon={faArrowsRotate} />
              </button>
            </div>

            <div>
              <p>
                <FormattedMessage id="home_welcome_change_action_b" />
              </p>
              <form>
                <input placeholder="0" value={countToken * course} />
                <select
                  onChange={(e) => {
                    setConvMon(e.target.value);
                  }}>
                  <option>USD</option>
                  <option>RUB</option>
                  <option>UAH</option>
                </select>
              </form>
            </div>
          </div>
        </div>

        <div className={styles.search}>
          <button>
            <FormattedMessage id="home_welcome_change_action_d" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
