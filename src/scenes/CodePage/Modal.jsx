import { motion } from 'framer-motion';
import Backdrop from '../../features/Backdrop';
import { QRCodeCanvas } from 'qrcode.react';
import { FormattedMessage } from 'react-intl';

const Modal = ({ handleClose, text }) => {
  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: '-100vh',
      opacity: 0,
    },
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="modal"
        onClick={(e) => e.stopPropagation()}>
        <QRCodeCanvas size="150" value="https://t.me/kukushka" />
        <div className="list">
          <div className="card">
            <h4>
              <FormattedMessage id="qr_p3" />
            </h4>
            <p>175 000 RUB.</p>
          </div>

          <div className="card">
            <h4>
              <FormattedMessage id="qr_p4" />
            </h4>
            <p>24 March, 14:00 PM</p>
          </div>

          <div className="card">
            <h4>
              <FormattedMessage id="qr_p5" />
            </h4>
            <p>Tinkoff Drive</p>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
