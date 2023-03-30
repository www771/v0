import CardImage from './components/CardImage';
import Comission from './components/Comission';
import Email from './components/Email';
import Partners from './components/Partners';
import Steps from './components/Steps';
import WelcomeSection from './components/WelcomeSection';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="page">
      <WelcomeSection />
      <Partners />
      <CardImage />
      <Steps />
      <Comission />
      <Email />
    </motion.div>
  );
};

export default HomePage;
