import './Navbar.css';

export default function Navbar() {
  const handleNavClick = (e, id) => {
    e.preventDefault(); // Stop default page scroll

    const scrollContainer = document.querySelector('.right-scrollable');
    const target = document.getElementById(id);

    if (scrollContainer && target) {
      const targetOffset = target.offsetTop;
      scrollContainer.scrollTo({
        top: targetOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="Navbar">
      <ul className="nav-links">
        <li><a href="#AboutMe" onClick={(e) => handleNavClick(e, 'AboutMe')}>ABOUT</a></li>
        <li><a href="#Experience" onClick={(e) => handleNavClick(e, 'Experience')}>EXPERIENCE</a></li>
        <li><a href="#Projects" onClick={(e) => handleNavClick(e, 'Projects')}>PROJECTS</a></li>
        <li><a href="#Contact" onClick={(e) => handleNavClick(e, 'Contact')}>CONTACT</a></li>
      </ul>
    </nav>
  );
}
