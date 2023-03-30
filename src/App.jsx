import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './features/Footer/Footer';
import Navbar from './features/Navbar/Navbar';
import ChangePage from './scenes/ChangePage';
import CodePage from './scenes/CodePage';
import FaqPage from './scenes/FaqPage';
import HomePage from './scenes/HomePage';
import StakePage from './scenes/StakePage';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/locales';
import { messages } from './i18n/message';
import { useState } from 'react';
import Bar from './features/Navbar/Bar';

const App = () => {
  function getInitialLocale() {
    const savedLocale = localStorage.getItem('locale');
    console.log(savedLocale);
    return savedLocale || LOCALES.ENGLISH;
  }

  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());

  const handleChange = ({ target: { value } }) => {
    setCurrentLocale(value);
    localStorage.setItem('locale', value);
  };

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}>
      <BrowserRouter>
        <Bar currentLocale={currentLocale} handleChange={handleChange} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stake" element={<StakePage />} />
          <Route path="/p2p" element={<ChangePage />} />
          <Route path="/qr-code" element={<CodePage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </IntlProvider>
  );
};

export default App;
