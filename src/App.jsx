import './App.css';
import Navbar from './components/Navbar'; // Adicione isso
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar /> {/* Navbar da página principal */}
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
