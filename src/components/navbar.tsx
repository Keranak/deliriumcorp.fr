import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  
    <header className="bg-gray-800 text-white">
      
        <div className="hidden md:block">
          <nav className="ml-10 space-x-4">
          <div className="container mx-auto py-4 flex items-center justify-between">
        <div>
          <Image src="/LOGO_DELIRIUM.png" alt="logo" width={300} height={300} />
        </div>
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
          >
            <Image src="/MENU_BURGER.png" alt="Menu Burger" width={40} height={40} />
          </button>
        </div>
        </div>
            <Link href="/" passHref>
              <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                Accueil
              </span>
            </Link>
            <Link href="/about" passHref>
              <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                À propos de nous
              </span>
            </Link>
            <Link href="/contact" passHref>
              <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                Nous contacter
              </span>
            </Link>
            <Link href="/login" passHref>
              <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                Connexion
              </span>
            </Link>
            <Link href="/register" passHref>
              <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                Inscription
              </span>
            </Link>
          </nav>
        </div>
      
      {/* Menu burger */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <nav className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" passHref>
            <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              Accueil
            </span>
          </Link>
          <Link href="/about" passHref>
            <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              À propos de nous
            </span>
          </Link>
          <Link href="/contact" passHref>
            <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              Nous contacter
            </span>
          </Link>
          <Link href="/login" passHref>
            <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              Connexion
            </span>
          </Link>
          <Link href="/register" passHref>
            <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              Inscription
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
