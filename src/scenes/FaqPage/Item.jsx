import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styles from './index.module.scss';

const Collapsible = ({ title, children }) => {
  const [isVisible, setVisible] = useState(false);
  const handleVisibility = () => setVisible(!isVisible);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className={styles.item} onClick={handleVisibility}>
        <h1>{title}</h1>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: 'auto',
              opacity: 1,
            }}
            exit={{ height: 0, opacity: 0 }}>
            <div className={styles.info}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Collapsible;
