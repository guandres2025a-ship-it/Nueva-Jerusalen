import Header from './components/Header';
import Hero from './components/Hero';
import About from './pages/About';
import Events from './pages/Events';
import Gallery from './components/Gallery';
import Countdown from './components/Countdown';
import MapSection from './components/MapSection';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

export default function App() {
  return (
    <>
      <Preloader />
      <Header />
      <Hero />
      <About />
      <Events />
      <Gallery/>
      <Countdown />
      <MapSection />
      <Contact />
      <Footer />
    </>
  );
}

