import Block from './components/Block/Block';
import Header from './components/Header';
import { motion } from 'framer-motion';

const CodePage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="page">
      <Header />
      <Block />
    </motion.div>
  );
};

export default CodePage;
