import styles from './Block.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cash from '../../../../assets/cash.png';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Modal from '../../Modal';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', marginLeft: '20px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
}

function Component({ title, description }) {
  return (
    <div className="card">
      <h1>
        <FormattedMessage id="qr_p1" /> <span>{title}</span> <br></br> <p>{description}</p>
      </h1>
    </div>
  );
}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Block = () => {
  const [activeButton, setActiveButton] = useState('USDT');
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const place = `Enter an amount from 0.01 ${activeButton} to 2 ${activeButton}`;

  const activeStyle = {
    backgroundColor: '#27293F',
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.top}>
          <Slider className="slick" {...settings}>
            <Component title="GrandExchange" description="100,000$" />
            <Component title="AhmatExchange" description="500,000$" />
            <Component title="ArmaniExchange" description="1,000$" />
          </Slider>
        </div>
        <div className={styles.bottom}>
          <div className={styles.cash}>
            <h1>
              <FormattedMessage id="qr_p2" />
            </h1>
            <img src={cash} />
          </div>
        </div>

        <div className={styles.buttons}>
          <button
            onClick={() => setActiveButton('USDT')}
            style={activeButton == 'USDT' ? activeStyle : {}}>
            USDT
          </button>
          <button
            onClick={() => setActiveButton('ETH')}
            style={activeButton == 'ETH' ? activeStyle : {}}>
            ETH
          </button>
          <button
            onClick={() => setActiveButton('BTC')}
            style={activeButton == 'BTC' ? activeStyle : {}}>
            BTC
          </button>
        </div>

        <div className={styles.exit}>
          <input placeholder={place} />
          <button onClick={() => (modalOpen ? close() : open())}>
            <FormattedMessage id="qr_h1" />
          </button>
          {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
        </div>
      </div>
    </div>
  );
};

export default Block;
