import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Cipheria from './pages/Cipheria';
import CipheriaPrivacy from './pages/CipheriaPrivacy';
import Projects from './pages/Projects';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <div className="font-sans">
            <Routes>
              <Route path="/" element={<Projects />} />
              <Route path="/listify" element={<Home />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/cipheria" element={<Cipheria />} />
              <Route path="/cipheria/privacy-policy" element={<CipheriaPrivacy />} />
            </Routes>
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
