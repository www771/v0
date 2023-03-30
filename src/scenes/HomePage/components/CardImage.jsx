import styles from '../index.module.scss';
import img1 from '../../../assets/1.jpg';
import img2 from '../../../assets/2.jpg';
import img3 from '../../../assets/3.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CardImage = () => {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.cards_image}>
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={inView1 ? 'visible' : 'hidden'}
        variants={variants}
        className={styles.card}>
        <img src={img1} />
      </motion.div>

      <motion.div
        ref={ref2}
        initial="hidden"
        animate={inView2 ? 'visible' : 'hidden'}
        variants={variants}
        className={styles.card}>
        <img src={img2} />
      </motion.div>

      <motion.div
        ref={ref3}
        initial="hidden"
        animate={inView3 ? 'visible' : 'hidden'}
        variants={variants}
        className={styles.card}>
        <img src={img3} />
      </motion.div>
    </div>
  );
};

export default CardImage;
