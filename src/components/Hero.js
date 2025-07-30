import './Hero.css';
import profileImage from '../assets/gradShot.jpg'
export default function Hero() {
  return (
    <section id="Welcome" className="hero-section">
      <img src={profileImage} alt="profile" className="profile-img" />
      <h1>Welcome to Harry's personal space!</h1>
      <p className="hero-tagline" >Software Engineer | Problem Solver | Creator</p>
      <p className="hero-description">
        I'm a Computer Science graduate passionate about building impactful technology. I care about creating secure, user-friendly, and mission-driven software. I thrive in teams that value clarity, purpose, and performance.
      </p>
      <a href="#Contact" className="hero-cta fade-in">Click to Contact Form ↓</a>
    </section>
  );
};

