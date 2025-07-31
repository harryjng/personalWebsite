import './Hero.css';
import Navbar from './Navbar';

// import profileImage from '../assets/gradShot.jpg'
export default function Hero() {
  return (
    <section id="AboutMe" className="hero-section">
      {/* <img src={profileImage} alt="profile" className="profile-img" /> */}
      <h1 className='Name'>Harry Jung</h1>
      <p className="hero-tagline" >Software Engineer | Washington DC</p>
      <p className="hero-description">
        Passionate for building impactful technology. 
      </p>
      <Navbar />
      <a href="#Contact" className="hero-cta fade-in">Click to Contact Form ↓</a>
    </section>
  );
};

