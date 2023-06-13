import { FiHome, FiLogIn, FiUserPlus, FiMail, FiInfo } from 'react-icons/fi';
import { FaInstagram, FaYoutube, FaTiktok, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-center items-center">
        <Image
          src="/LOGO_DELIRIUM.png"
          alt="logo"
          width={142.51}
          height={247}
        />

        <nav className="ml-6">
          <ul className="flex">
            <li className="mr-4">
              <a href="/" className="flex items-center text-gray-300 hover:text-white">
                <FiHome className="mr-2" />
                Accueil
              </a>
            </li>
            <li className="mr-4">
              <a href="/connexion" className="flex items-center text-gray-300 hover:text-white">
                <FiLogIn className="mr-2" />
                Connexion
              </a>
            </li>
            <li className="mr-4">
              <a href="/inscription" className="flex items-center text-gray-300 hover:text-white">
                <FiUserPlus className="mr-2" />
                Inscription
              </a>
            </li>
            <li className="mr-4">
              <a href="/contact" className="flex items-center text-gray-300 hover:text-white">
                <FiMail className="mr-2" />
                Contact
              </a>
            </li>
            <li>
              <a href="/apropos" className="flex items-center text-gray-300 hover:text-white">
                <FiInfo className="mr-2" />
                À propos de nous
              </a>
            </li>
          </ul>
        </nav>
          <br />
        <div className="ml-6">
          <ul className="flex">
            <li className="mr-2">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaInstagram />
              </a>
            </li>
            <li className="mr-2">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaYoutube />
              </a>
            </li>
            <li className="mr-2">
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaTiktok />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
