import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './components/HeroSection';
import Feature from './components/Feature';
import SatisfiedClients from './components/SatisfiedClients';
import DigitalMarketing from './components/DigitalMarketing';
import StartEarning from './components/StartEarning';
import ReadyToHit from './components/ReadyToHit';
import GrowthPartner from './components/GrowthPartner';
import LearnUs from './components/LearnUs';
import Footer from './components/Footer';
import ActualResults from './components/ActualResults';
import PreLoader from './components/PreLoader';
import BackToTop from "./assets/images/webp/backtotop.webp"
import Aos from 'aos';
import "aos/dist/aos.css";


function App() {
  // ---------------------aos-------------------
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
    // Aos.refresh();
  });
  // -----------------back-to-top------------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // -----------------preloader---------------
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {screenLoading ? (
        <PreLoader />
      ) : (
        <>
          <HeroSection />
          <Feature />
          <SatisfiedClients />
          <DigitalMarketing />
          <StartEarning />
          <GrowthPartner />
          <ActualResults />
          <LearnUs />
          <ReadyToHit />
          <Footer />
          <div>
            <img onClick={() => top()} src={BackToTop} alt="Arrow" className={`${backToTop ? "back_to_top_position" : "d-none"}`} />
          </div>
        </>
      )}
    </>
  );
}

export default App;
