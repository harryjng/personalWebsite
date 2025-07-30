import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline'

function App() {
  return (
    <div className="App">
      <Navbar />     
      <Hero />  
      <Timeline />
      <section id="Education" className="section">Education</section>
      <section id="Experience" className="section">Experience</section>
      <section id="Projects" className="section">Projects</section>
      <section id="Skills" className="section">Skills</section>
      <section id="Hobbies" className="section">Hobbies</section>
      <section id="Contact" className="section">Contact Me</section>
    </div>
  );
}

export default App;
