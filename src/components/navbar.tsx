import React, { useState } from 'react';

interface NavLink {
  title: string;
  url: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks: NavLink[] = [
    { title: 'Accueil', url: '/' },
    { title: 'À propos', url: '/apropos' },
    { title: 'Contact', url: '/contact' },
  ];

  return (
    <nav>
      <div className="navbar-container">
        <div className="logo"><img src="/LOGO_DELIRIUM.png" alt="logo de delirium" /></div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="burger" onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? 'line-1-active' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'line-2-active' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'line-3-active' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
