import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VolunteerForm from './components/VolunteerForm';
import Footer from './components/Footer';
import Donate from './components/Donate';
import Stats from './components/Stats';

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <VolunteerForm />
        <Donate />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}

export default App;