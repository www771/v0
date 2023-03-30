import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faTelegram,
  faGithub,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.contact}>
          <a href="/">
            <FontAwesomeIcon size="xl" icon={faTwitter} />
          </a>
          <a href="/">
            <FontAwesomeIcon size="xl" icon={faTelegram} />
          </a>
          <a href="/">
            <FontAwesomeIcon size="xl" icon={faGithub} />
          </a>
          <a href="/">
            <FontAwesomeIcon size="xl" icon={faYoutube} />
          </a>
          <a href="/">
            <FontAwesomeIcon size="xl" icon={faInstagram} />
          </a>
        </div>

        <div className={styles.logo}>{/* <h1>P2Dex</h1> */}</div>

        <div className={styles.nav}>
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
    </div>
  );
};

export default Footer;
