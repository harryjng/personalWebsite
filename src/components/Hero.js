import './Hero.css';
import Navbar from './Navbar';

// import profileImage from '../assets/gradShot.jpg'
export default function Hero() {
  return (
    <section id="AboutMe" className="hero-section">
      {/* <img src={profileImage} alt="profile" className="profile-img" /> */}
      <h1 class="text-[3.6rem] mt-3 ml-36 font-black">Harry Jung</h1>
      <p class="text-[1.2rem] text-slate-200 -mt-[0.1rem] ml-36 mb-3.5">Software Engineer | Washington DC</p>
      <p className="hero-description">
        Passionate for building impactful technology. 
      </p>

      <Navbar />
    </section>
  );
};

