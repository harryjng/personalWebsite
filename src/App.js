import './App.css';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="split-layout">
      <aside className="left-fixed">
        <Hero />
      </aside>

      <main className="right-scrollable">
        <About />
        <section id="Experience" className="section">Experience</section>
        <section id="Projects" className="section">Projects</section>
        <section id="Contact" className="section">Contact Me</section>
      </main>
    </div>
  );
}

export default App;
