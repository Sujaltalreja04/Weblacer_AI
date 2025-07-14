import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Founders from './pages/Founders';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative">
      <CustomCursor />
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <div className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Contact />
        <Admin />
        <Founders />
        <Footer />
      </div>
    </div>
  );
}

export default App;