import Navbar from './Navbar';
import TabBar from './TabBar';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const Bar = ({ currentLocale, handleChange }) => {
  const [isMobile, setIsMobile] = useState(false);

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Desktop>
        <Navbar currentLocale={currentLocale} handleChange={handleChange} />
      </Desktop>

      <Mobile>
        <TabBar />
      </Mobile>
    </div>
  );
};

export default Bar;
