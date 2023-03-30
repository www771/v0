import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCubesStacked,
  faQrcode,
  faQuestionCircle,
  faHandshakeSimple,
} from '@fortawesome/free-solid-svg-icons';

const TabBar = () => {
  return (
    <div className={styles.tabbar}>
      <div className={styles.top}>
        <div>
          <h1>P2Dex</h1>
          <button>Connect Wallet</button>
        </div>
      </div>
      <div className={styles.tab}>
        <div>
          <Link to="/">
            <FontAwesomeIcon size="xl" icon={faHome} />
            Home
          </Link>
        </div>
        <div>
          <Link to="/stake">
            <FontAwesomeIcon size="xl" icon={faCubesStacked} />
            Stake
          </Link>
        </div>
        <div>
          <Link to="/p2p">
            <FontAwesomeIcon size="xl" icon={faHandshakeSimple} />
            P2P
          </Link>
        </div>
        <div>
          <Link to="/qr-code">
            <FontAwesomeIcon size="xl" icon={faQrcode} />
            QRCode
          </Link>
        </div>
        <div>
          <Link to="/faq">
            <FontAwesomeIcon size="xl" icon={faQuestionCircle} />
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabBar;
