import { React, useState, useEffect } from 'react';
import './App.css'
import Header from './layout/Header';
import Footer from './layout/footer';
import Home from './layout/index/Home';

function App() {
  const [isRotated, setIsRotated] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 500);

  // Function to toggle rotation
  const toggleRotation = () => {
    setIsRotated(!isRotated);
  };

  // Listen for screen resize to detect if it's mobile view (max-width: 500px)
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Disable vertical scroll and enable horizontal scroll when rotated
  useEffect(() => {
    if (isMobileView) {
      document.body.style.overflowY = isRotated ? 'hidden' : 'auto';
      document.body.style.overflowX = isRotated ? 'auto' : 'hidden';
    }
  }, [isRotated, isMobileView]);

  return (
    <div className={`app-container ${isRotated && isMobileView ? 'rotated' : ''}`}>
      {/* Conditionally render the rotate button only if it's a mobile view */}
      {isMobileView && (
        <button className="rotate-button " onClick={toggleRotation}>
          {isRotated ? 'Reset' : 'Rotate'}
        </button>
      )}

      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
