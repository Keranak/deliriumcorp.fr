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
        <img src="/LOGO_DELIRIUM.png" alt="logo de delirium" className="logo" />
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className={`burger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <img src="/MENU_BURGER.png" alt="menu burger" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
