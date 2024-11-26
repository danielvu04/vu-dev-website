import './styles/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div style={{ padding: '20px 20px', backgroundColor: '#f4f4f4' }}>
        <FeaturedProjects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
