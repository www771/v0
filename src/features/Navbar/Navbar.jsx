import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { FormattedMessage } from 'react-intl';
import { useState, useEffect } from 'react';
import { LOCALES } from '../../i18n/locales';
import Web3 from 'web3';

const languages = [
  { name: 'English', code: LOCALES.ENGLISH },
  { name: 'Русский', code: LOCALES.RUSSIAN },
];

const Navbar = ({ currentLocale, handleChange }) => {
  const [wallet, setWallet] = useState('');
  const [balance, setBalance] = useState('');

  useEffect(() => {
    getCurrentWallet();
    addWalletListener();
  }, []);

  async function getBalance() {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const address = await web3.eth.getAccounts().then((accounts) => accounts[0]);
      const balanceInWei = await web3.eth.getBalance(address);
      const balanceInEther = web3.utils.fromWei(balanceInWei, 'ether');
      setBalance(`${balanceInEther.substr(0, 5)} ETH`);
    }
  }

  const getCurrentWallet = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      });

      if (accounts.length > 0) {
        setWallet(accounts[0]);
        getBalance();
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const addWalletListener = async () => {
    if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
      window.ethereum.on('accountsChanged', (accounts) => {
        setWallet(accounts[0]);
        getBalance();
      });
    } else {
      setWallet('');
    }
  };

  const connectWallet = async () => {
    if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWallet(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      // install
    }
  };

  console.log(balance);

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <h1>
            <Link to="/">P2Dex</Link>
          </h1>
        </div>

        <div className={styles.navigation}>
          <Link to="/">
            <FormattedMessage id="nav_1" />
          </Link>
          <Link to="/stake">
            <FormattedMessage id="nav_2" />
          </Link>
          <Link to="/p2p">
            <FormattedMessage id="nav_3" />
          </Link>
          <Link to="/qr-code">
            <FormattedMessage id="nav_4" />
          </Link>
          <Link to="/faq">
            <FormattedMessage id="nav_5" />
          </Link>
        </div>
      </div>

      <div className={styles.connect}>
        <select onChange={handleChange} value={currentLocale}>
          {languages.map(({ name, code }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
        {wallet && <p>{balance}</p>}
        {wallet ? (
          <span>
            {wallet.substr(0, 4)}...{wallet.substr(38)}
          </span>
        ) : (
          <button className={styles.btn} onClick={connectWallet}>
            <FormattedMessage id="nav_6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
