import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home';
import Products from './pages/Products';
import Features from './pages/Features';
import Services from './pages/Services';
import UseCase from './pages/UseCase';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import DemoRequest from './pages/DemoRequest';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import ResponsibleDisclosure from './pages/ResponsibleDisclosure';
import FAQ from './pages/FAQ';
import About from './pages/About';
import FloatingButton from './components/FloatingButton';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const AppContent = () => {
  const { themeConfig } = useTheme();
  
  return (
    <div className={`min-h-screen ${themeConfig.background} ${themeConfig.text} transition-colors duration-300`}>
      <Navbar />
      <div className='pt-16'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/features" element={<Features />} />
          <Route path="/services" element={<Services />} />
          <Route path="/use-cases" element={<UseCase />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-demo" element={<DemoRequest />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/disclosure" element={<ResponsibleDisclosure />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
      <Footer />
      <FloatingButton />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App