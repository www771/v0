import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Table from './components/List/Table';
import { motion } from 'framer-motion';

const ChangePage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="page">
      <Banner />
      <Header />
      <Table />
    </motion.div>
  );
};

export default ChangePage;
