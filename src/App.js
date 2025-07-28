import './App.css';
import profileImage from './assets/gradShot.jpg';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />       
      <header className="App-header">
        <img src={profileImage} alt="profile" className="profile-img"/>
        Welcome to Harry's personal space!
      </header>
      <section id="About" className="section">About Me</section>
      <section id="Timeline" className="section">Timeline</section>
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
