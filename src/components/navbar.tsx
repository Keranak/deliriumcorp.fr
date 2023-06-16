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
    { title: 'Connexion', url: '/signin' },
    { title: 'Inscription', url: '/signup'}
  ];

  return (
    <nav aria-label="Menu de navigation"> 
      <div className="navbar-container text-xl">
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a title={link.title} href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className={`burger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <img src="/MENU_BURGER.png" alt="menu burger" className='logoBurger' aria-label="Ouvrir le menu" />
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
