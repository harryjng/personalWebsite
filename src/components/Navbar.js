import './Navbar.css'
import Logo from '../assets/HJLOGO.png'

export default function Navbar() {
  return (
    <nav className = "Navbar">
      <div className='logoGroup'>
      <img src = {Logo} alt = "Name Logo" className = "LogoIMG"/>
      <div className = "Logo">Harry Jung</div>
      </div>
      <ul className = "nav-links">
        <li><a href = "#Welcome">Welcome</a></li>
        <li><a href = "#Timeline">Timeline</a></li>
        <li><a href = "#Education">Education</a></li>
        <li><a href = "#Experience">Experience</a></li>
        <li><a href = "#Projects">Projects</a></li>
        <li><a href = "#Skills">Skills</a></li>
        <li><a href = "#Hobbies">Hobbies</a></li>
        <li><a href = "#Contact">Contact Me</a></li>
      </ul>
    </nav>

  );
}