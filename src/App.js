import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Hero />
                  <FeaturedProjects />
                  <Skills />
                </div>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
